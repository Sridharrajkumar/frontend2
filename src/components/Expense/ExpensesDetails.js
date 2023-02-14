import React,{useState} from 'react';

function ExpensesDetails(props)
{
    const [title, setTitle]=useState(props.title)
    
    function ClickHandler(){
        setTitle('updated');
        console.log(title);
    }

    const [amount,setAmount]=useState(props.amount)
    function amountChanger(){
        setAmount('100');

    }

    return (
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='Location_Of_Expenses'>{props.location}</div>
        <div className='expense-item__price'>{amount}</div>
        <button onClick={amountChanger}>change price</button>
        <button onClick={ClickHandler}>Change Title</button>
        </div>
    );

}

export default ExpensesDetails;