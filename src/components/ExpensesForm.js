import React, {useState} from "react";
import './ExpensesForm.css';

function ExpensesForm(){
    const [title,usertitle]=useState('');

    function addExpensesDetails(event){
        usertitle(event.target.value);

    }

    const[oldAmount,userAmount]=useState('');

    function addAmount(event){
        userAmount(event.target.value);

    }

    const[oldDate,userDate]=useState('');

    function addDate(event){
        userDate(event.target.value);
    }

    function formSubmit(event)
    {
        event.preventDefault();

        const expensesData={
            title:title,
            amount:oldAmount,
            date:new Date(oldDate)
        }

        console.log(expensesData);
    }


    return(
        <form onSubmit={formSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input type='text' onChange={addExpensesDetails} />
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type='text' onChange={addAmount} />
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type='date' onChange={addDate} />
                </div>
                <button>add expenses</button>
            </div>
            
        </form>
    )
}

export default ExpensesForm;