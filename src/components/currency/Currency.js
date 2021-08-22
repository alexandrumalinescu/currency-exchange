import React, { useState, useEffect } from "react";
import axios from "axios";
import "../currency/currency.css";
import CardContainer from "../card-container/CardContainer";
import CurrencyFlag from "react-currency-flags";//npm installed and imported for flags
import {toast} from 'react-toastify';//imported for notification
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
  //after we added a currency we close the modal 
  const addCurrency = () => {setModalIsOpen(false); };
  //fetching data from Api
  const getData =  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        setRatesFullName(Object.entries(res.data.symbols)); // getting currency Symbol
        setName(Object.values(res.data.symbols));// getting currency name
      })
      .catch((err) => console.log(err));
  },[modalIsOpen]);
  
  //updating currency list
  const handleCurrency = () => {handle(multiple);
  };
  const handle = (item) => {
    const updateList = [...currency, item];
    setCurrency(updateList);
  };
  //notify currency was added
  const notify = ()=>{toast.success('Adding currency', {
    position: toast.POSITION.TOP_RIGHT,autoClose:2000
  })}

  return (
    <div className="all">
      <div >
        {modalIsOpen ? (
          <div className='modal'>
            {/* closing the modal and adding currency */}
            <button className='currencyClose' onClick={addCurrency}>Add Currency</button>
           {/* rendering currency */}
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
                {/* passing props to be used in any card */}
            </div>
            {/* button to open the modal for adding currency */}
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
