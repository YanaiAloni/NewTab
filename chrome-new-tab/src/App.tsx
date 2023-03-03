import React from 'react';
import logo from './logo.svg';
import './App.sass';
import {SearchBar} from './SearchBar/SearchBar'
import { GoogleSearch } from './BL/Search/GoogleSearch';

function App() {
  const fireflies=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div>
      
      <SearchBar search={{search:GoogleSearch, deafault:"Search..."}} />
      {fireflies.map((value:number)=><h1 className='firefly'></h1>)}
    </div>
  );
}

export default App;
