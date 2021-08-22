import React, { useEffect, useState } from "react";
import CurrencyFlag from "react-currency-flags";
import getSymbolFromCurrency from "currency-symbol-map";
import "../additionalCard/additionalCardStyle.css";
import axios from "axios";

const AdditionalCard = (props) => {
  const [getRate, setGateRate] = useState([]);
  const setCurrency = props.setCurrency;
  const baseName = props.baseName;
  const setInput1 = props.setInput1;
  const input1 = props.input1;
  const compareBeforesli= props.compare
  const compare = props.compare.slice(1);
  const base1 = props.base1;
  const currencyFullname = props.currencyFullname;
  const fecthCompareRates = props.fecthCompareRates;

  const API_KEY = "ef92ef24467a54ddf77b3ca107fbcb93";
  useEffect(() => {
    const fetchData = () => {
      const urlRates = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${base1}&symbols=${fecthCompareRates}`;
      const getRates = axios.get(urlRates);
      axios.all([getRates]).then(
        axios.spread((...allData) => {
          const allDataRates = Object.values(allData[0].data.rates);
          setGateRate(allDataRates);
        })
      );
    };
    fetchData();
  }, [fecthCompareRates]);

  //delete currency cards
   const handleDelete = (item)=>{
     const filteredCurrency= compareBeforesli.filter(
       currentValue=>(currentValue!==item)
     )
     setCurrency(filteredCurrency)
   }

  const handleDeleteAll = ()=>{setCurrency([])}
  const sign = getSymbolFromCurrency("EUR");
  
  // Returning cards
  return (
    <div className='fix'>
      <div >
            <div className="card-main">
              <div>
                <div
                onClick={handleDeleteAll}
                 className="delete-btn">X</div>
              </div>
              <div className="cardElements">
                <div className="flagSymbol">
                  <div>
                    { base1 !==undefined ? (
                      <CurrencyFlag id="flag" currency={base1} width={44}/>) : null
                    }
                  </div>
                  <div className="sign">{sign}</div>
                </div>
                <div className="elements">
                  <input
                    value={input1}
                    className='inputCoin'
                    placeholder='Enter a value'
                    onChange={(e)=>{setInput1(e.target.value)}}
                    type="text"
                  ></input>
                  <div id='nameflex'>
                    <div className="currencyName">{base1} - {baseName}</div>
                    <div className="rate">{`1 ${base1} = 1 ${base1}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {compare.map((item, i) => {
        return (
          <div key={i}>
            <div className="card">
              <div>
                <div onClick={()=>handleDelete(item)} className="delete-btn">X</div>
              </div>
              <div className="cardElements">
                <div className="flagSymbol">
                  <div>
                    {<CurrencyFlag id="flag" currency={compare[i]} width={44}/> }
                  </div>
                  <div className="sign">{sign}</div>
                </div>
                <div className="elements">
                  <input
                    placeholder={`${input1 * getRate[i]}`}
                  ></input>
                  <div id='nameflex'>
                  <div className="currencyName">{compare[i]}-{currencyFullname[i + 1]}</div>
                  <div className="rate">{`1 ${base1} = ${getRate[i]} ${compare[i]}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalCard;
