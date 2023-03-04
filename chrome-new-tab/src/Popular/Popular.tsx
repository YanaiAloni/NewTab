/*global chrome*/
import { IPopular } from "./IPopular";
import Card from '@mui/material/Card'
import { useEffect, useState } from "react";
import "./Popular.sass"
import { HistoryItem } from "../HistoryItem/HistoryItem";
import { SiteItem } from "../SiteItem/SiteItem";


export const Popular: React.FC<{ popular: IPopular, className?: string }> = (props) => {
    const [history, setHistory] = useState<chrome.history.HistoryItem[]>([])

    const [topSites, setTopSites] = useState<{ site: string, amount: number }[]>([])

    useEffect(() => {
        window.chrome.history.search({ text: "" }, setHistory)
    })

    const getTopSites = () => {
        let sites: Record<string, number> = {};
        for (let index = 0; index < history.length; index++) {
            let url = history[index].url;
            if (url !== undefined) {
                let domain = url.split('/');
                let site = domain[0] + "//" + domain[2];

                if (site in sites) {
                    sites[site] += 1;
                }
                else {
                    sites[site] = 1;
                }
            }
        }
        let top: any[] = [];
        for (const key in sites) {
            top = top.concat({ site: key, amount: sites[key] })
        }
        top.sort((a, b) => {
            if (a.amount > b.amount) return -1;
            if (b.amount > a.amount) return 1;
            return 0
        })
        let limited = [];
        for (let index = 0; index < Math.min(props.popular.amount, top.length); index++) {
            limited[index] = top[index];

        }
        return limited

    }
    useEffect(() => {
        setTopSites(getTopSites())
    }, [history]);

    return (
        <Card style={{ backgroundColor: "black", width: "30%", height: "30%", color: "#093170" }} className="history">
            <h1>Top {props.popular.amount} sites</h1>
            {topSites?.map((item: { site: string, amount: number }, index: number) => <SiteItem site={item.site} amount={item.amount} key={index} />)}
        </Card>
    )
}