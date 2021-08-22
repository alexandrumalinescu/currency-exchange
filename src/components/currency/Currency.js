import React, { useState, useEffect } from "react";
import axios from "axios";
import "../currency/currency.css";
import CardContainer from "../card-container/CardContainer";
import CurrencyFlag from "react-currency-flags";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const Currency = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currency, setCurrency] = useState([]);
  const [multiple, setMultiple] = useState("");
  const [ratesFullName, setRatesFullName] = useState([]);
  const [name,setName] = useState([])

  const API_KEY = "ef92ef24467a54ddf77b3ca107fbcb93";
  const url1 = `http://api.exchangeratesapi.io/v1/symbols?access_key=${API_KEY}`;
  const addCurrency = () => {
    setModalIsOpen(false);
  };
  
  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        setRatesFullName(Object.entries(res.data.symbols));
        setName(Object.values(res.data.symbols));
        
      })
      .catch((err) => console.log(err));
  }, []);

  
  const handleCurrency = () => {handle(multiple);
  };
  const handle = (item) => {
    const updateList = [...currency, item];
    setCurrency(updateList);
  };

  const notify = ()=>{toast.success('Adding currency', {
    position: toast.POSITION.TOP_RIGHT,autoClose:2000
  })}

  return (
    <div className="all">
      <div >
        {modalIsOpen ? (
          <div className='modal'>
            <button className='currencyClose' onClick={addCurrency}>Add Currency</button>
            {ratesFullName.map((item, i) => {
              return (
                <div key={item[1]} className='nameAndFlag'>
                  <ul key={i} >
                    {<CurrencyFlag  id="flag" currency={item[0]} width={38}/>}
                    <option
                      value={[item[0], item[1]]}
                      onClickCapture={(e) => setMultiple(e.target.value)}
                      onClick={()=>{
                        handleCurrency();
                        notify();
                        }}>
                      {item + " "}
                    </option>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div id='addCurrency'>
            <div>
              <CardContainer name={name} currency={currency} setCurrency={setCurrency}/>
            </div>
            <button onClick={()=>{setModalIsOpen(true);}}>
              Add Currency
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency;
