import React from "react";
import './ExpensesForm.css';

function ExpensesForm(){

    function addExpensesDetails(event){
        console.log(event.target.value);

    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input type='text' onChange={addExpensesDetails} />
                </div>
                <div className="new-expense__control">
                   <label>Amount</label>
                   <input type='text' onChange={addExpensesDetails} />
                </div>
                <div className="new-expense__control">
                   <label>Date</label>
                   <input type='date' onChange={addExpensesDetails} />
                </div>
                <button>add expenses</button>
            </div>
            
        </form>
    )
}

export default ExpensesForm;