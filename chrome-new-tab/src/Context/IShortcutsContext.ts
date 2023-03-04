import { IShortcut } from "../Shortcut/IShortcut";
import React from 'react';

export interface ISHortcutsContext {
    shortcuts: IShortcut[],
    addShortcut: (shortcut: IShortcut) => void ,
    removeShortcut: (shortcut: IShortcut) => void 
}

export const ShortcutsContext =React.createContext<ISHortcutsContext>({
    shortcuts: [],
    addShortcut: (shortcut: IShortcut) => void {},
    removeShortcut: (shortcut: IShortcut) => void {}
})