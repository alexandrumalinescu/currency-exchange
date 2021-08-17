import React from 'react';
import './App.css';
import DateComponent from '../src/components/dateComponent/date'
import CurrencyComponent from './components/currency/CurrencyComponent';

function App() {

  return (
    <div className="container">
      <h1 className='title'> Currency Exchange</h1>
      <DateComponent/>
      <CurrencyComponent/>
    </div>
  );
}

export default App;
