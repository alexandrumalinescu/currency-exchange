import React from 'react';
import '../dateComponent/dateComponent.css'

const DateComponent= ()=> {

    const date = new Date();
    const displayDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    
    return (
        <div className='date'>
            {displayDate}
        </div>
    )
}

export default DateComponent;
