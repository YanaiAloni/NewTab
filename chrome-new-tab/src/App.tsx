import React from 'react';
import logo from './logo.svg';
import './App.sass';
import { SearchBar } from './SearchBar/SearchBar'
import { GoogleSearch } from './BL/Search/GoogleSearch';
import { Latest } from './Latest/Latest';
import { Clock } from './Clock/Clock';
import { Shortcuts } from './Shortcuts/Shortcuts';
import { ShortcutsContextProvider } from './Context/ShortcutsProvider';
import { ShortcutsScreen } from './ShortcutsScreen/ShortcutsScreen';
import { Popular } from './Popular/Popular';

function App() {
  const fireflies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  return (

    <div>
      <ShortcutsContextProvider>
        <ShortcutsScreen>

          <Clock />
          <SearchBar search={{ search: GoogleSearch, deafault: "Search..." }} />
          <div className='addons'>
            <Latest latest={{ amount: 5 }} />
            <Popular popular={{amount : 5}}/>
            <Shortcuts />
          </div>
          {fireflies.map((value: number) => <h1 className='firefly' key={value}></h1>)}
        </ShortcutsScreen>
      </ShortcutsContextProvider>
    </div>
  );
}

export default App;
