import React,{useState, useEffect} from 'react';
import '../currency/currency.css';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const CurrencyComponent = ()=> {

    const [modalIsOpen, setModalIsOpen]= useState(false)
    const [symbol, setSymbol] = useState([])
    const [rates, setRates] = useState({})
    //const API_KEY2 = '0f9c0220024d2c43d39d60453cc7f1eb';
    const API_KEY = 'ef92ef24467a54ddf77b3ca107fbcb93';

    useEffect(()=>{
        axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=EUR`)
        .then(res=>{
            const obj= res.data;
            //console.log(obj)
            setSymbol(obj.base);
            setRates(obj.rates)
            
        })
        .catch(error=>{
            console.log(error)
        })
    },[modalIsOpen]);

    const allRates = Object.entries(rates)
    console.log(allRates)

    return (

        <div className='currencyContainer'>
            <div className='currencyDasboard'>
                <div className='card'>
                    <div><button>X</button></div>
                    <div>
                        <div className='flag'>Steag</div>
                        <div>{}</div>
                        <input className='inputCoin' type='text' placeholder=''></input>
                    </div>
                    <div>{symbol} - {} </div>
                    <div>{`1 ${symbol} = ${1*(rates.EUR)} ${symbol}`}</div>
                </div>
            </div>
            <button onClick={()=>{
                setModalIsOpen(true)
            }} className='button'>
                Add Currency
            </button>
            
            <Modal isOpen={modalIsOpen}>
                <button onClick={()=>{setModalIsOpen(false)}}>X</button>
                <h2>Choose currency</h2>
                <div>{allRates.map((item,key)=> {
                return <div key={item[0]}>{item[0]+' '+item[1]}</div>
            })}</div>
            </Modal>

        </div>
       
    )
}

export default CurrencyComponent;

