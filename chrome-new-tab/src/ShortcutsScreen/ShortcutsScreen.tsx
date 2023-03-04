import React, { Key, useContext, useEffect } from 'react'
import { ShortcutsContext } from '../Context/IShortcutsContext'
import { IShortcut } from '../Shortcut/IShortcut';

export const ShortcutsScreen: React.FC<{ children: any }> = (props) => {
    const { shortcuts } = useContext(ShortcutsContext);

    useEffect(() => {
        const onKeyDown = (e: { altKey:any,key:any }) => {
            
            for (let index = 0; index < shortcuts.length; index++) {
               if (e.altKey && shortcuts[index].keys===e.key)
               {
                    window.location.replace(shortcuts[index].url)
               }
            }
        }


        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);

        }

    }, [shortcuts])
    return (
        <>
            {props.children}
        </>
    );
}