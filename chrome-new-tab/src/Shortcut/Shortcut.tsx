import React, { useContext } from 'react'
import { ShortcutsContext } from '../Context/IShortcutsContext'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { IShortcut } from './IShortcut'
import './Shortcut.sass'
import { createTheme, Fab } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export const Shortcut: React.FC<{ shortcut: IShortcut, className?: string }> = (props) => {
    const { removeShortcut } = useContext(ShortcutsContext)
    const moveToItem = () => {
        if (props.shortcut.url !== undefined) {
            window.location.replace(props.shortcut.url)
        }
    }

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
        <div className='shortcut' >
            <span className='name' onClick={moveToItem}>
                {props.shortcut.name}
            </span>
            <span className='icon' onClick={() => removeShortcut(props.shortcut)}>
                ❌
            </span>
            <span className='keys'>
                alt + {props.shortcut.keys}
            </span>
        </div>
    )
}