import React from 'react';
import './ExpenseItem.css'
import ExpensesDate from './ExpensesDate';
import ExpensesDetails from './ExpensesDetails';
//import '../UI/Card.css'


function ExpenseItem(props){
   
    return( 
       
          <div className='expense-item card'>
          <ExpensesDate  date={props.date}/>
          <ExpensesDetails amount={props.amount} title={props.title}/> 
           <button>Change Title</button>
        </div>
        
    );
    
}

export default ExpenseItem;