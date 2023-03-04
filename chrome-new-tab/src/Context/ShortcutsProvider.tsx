import React, { Children, useEffect, useState } from 'react'
import { IShortcut } from '../Shortcut/IShortcut'
import { ShortcutsContext } from './IShortcutsContext'
import {Save,Get} from '../BL/Saver/Saver'

const NAME = "shortcuts"

export const ShortcutsContextProvider: React.FC<{ children: any }> = (props) => {
    const [shortcuts, setShortcuts] = useState<IShortcut[]>(Get(NAME))

   

    const addShortcut = (shortcut: IShortcut) => {
        setShortcuts([...shortcuts, shortcut])
        Save(NAME,[...shortcuts, shortcut])
    }
    const removeShortcut = (shortcut: IShortcut) => {
        setShortcuts(shortcuts.filter((sh) => shortcut.name !== sh.name))
        Save(NAME,shortcuts.filter((sh) => shortcut.name !== sh.name))
    }


    return (
        <ShortcutsContext.Provider value={{
            shortcuts: shortcuts,
            addShortcut: (shortcut: IShortcut) => addShortcut(shortcut),
            removeShortcut: (shortcut: IShortcut) => removeShortcut(shortcut)
        }}>
            {props.children}
        </ShortcutsContext.Provider>
    )
}

