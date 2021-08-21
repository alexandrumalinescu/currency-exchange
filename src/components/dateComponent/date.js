import React from 'react';
import '../dateComponent/dateComponent.css'

const DateComponent= ()=> {

    const date = new Date();
    const displayDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    
    return (
        <h1 className='date'>
            {displayDate}
        </h1>
    )
}

export default DateComponent;
