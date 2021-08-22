import React,{useState} from "react";
import AdditionalCard from "../additionalCard/AdditionalCard";

const CardContainer = (props) => {
  
    const [input1, setInput1]= useState('')
    const currency=props.currency
    const setCurrency=props.setCurrency
    const name=props.name;
    //spliting the currency to get the main one
    let base=currency[0]
    console.log(base)
    const sliceBase= (item)=>{
      if(item !== undefined){
        return item.slice(0,3)
      }
    }
    //spliting to get the currency name onyly
    const sliceFullName = (item)=>{
      if(item){return (currency.map(item=>item.slice(0,3)))}
    }
    const compare = sliceFullName(currency)
    const getFullNameAfterBase = (item)=>{
      if(item){return currency.map(item=>item.slice(4))}
    }
    const currencyFullname = getFullNameAfterBase(currency)
    const base1= sliceBase(base)
    const fecthCompareRates=compare.slice(1).toString()

    const nameBase = (item)=>{if(item){return item.slice(4)}}
    const baseName=nameBase(base)
     
    if(base){
      return (
        <div className="currencyContainer">
          <div className="currencyDasboard">
            <AdditionalCard 
            name={name}
            currency={currency}
            setCurrency={setCurrency}
            baseName={baseName}
            setInput1={setInput1}
            input1={input1}
            base1={base1}
            compare={compare}
            currencyFullname={currencyFullname}
            fecthCompareRates={fecthCompareRates}/>
          </div>
        </div>
      );
    }
    else { return <div></div>}
};

export default CardContainer;
