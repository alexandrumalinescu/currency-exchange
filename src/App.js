import React from 'react';
import './App.css';
import DateComponent from '../src/components/dateComponent/date';
import Currency from './components/currency/Currency';



const App= ()=> {

  return (
    <div className="container">
      <div className='container-wrap'>
        <h1 className='title'> Currency Exchange</h1>
        <DateComponent/>
        <Currency />
      </div>
    </div>
  );
}

export default App;
