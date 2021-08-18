import React from 'react';
import './App.css';
import DateComponent from '../src/components/dateComponent/date'
//import CurrencyComponent from './components/currency/CurrencyComponent';
import Currency from './components/currency/Currency';


const App= ()=> {

  return (
    <div className="container">
      <h1 className='title'> Currency Exchange</h1>
      <DateComponent/>
      <Currency className='currency'/>
    </div>
  );
}

export default App;
