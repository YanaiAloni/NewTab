import { Card, Fab } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { IShortcut } from '../Shortcut/IShortcut'
import { Shortcut } from '../Shortcut/Shortcut';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { ShortcutsContext } from '../Context/IShortcutsContext';
import FormDialog from '../FormDialog/FormDialog';
import './Shortcuts.sass'

export const Shortcuts: React.FC<{ className?: string }> = (props) => {
    const { shortcuts, addShortcut, removeShortcut } = useContext(ShortcutsContext)


    const theme = createTheme({
        palette: {
            primary: {

                main: '#000000',
            },
            secondary: {
                main: '#093170',
            },

        }
    })

    return (
        <Card className={`Shortcuts ${props.className ?? ""}`} style={{ backgroundColor: "black", width: "30%", height: "30%", color: "#093170" }}>
            <div className='Title'>
                <h1>
                    Shortcuts
                </h1>
                <ThemeProvider theme={theme}>
                    <FormDialog handleSubmit={addShortcut} className={"gridDialog"} />
                </ThemeProvider>
            </div>
            {shortcuts.map((shortcut: IShortcut, index: number) => <Shortcut shortcut={shortcut} key={index} />)}
        </Card>
    )
}