import React from 'react';
import ExpenseItem from "./ExpenseItem";
//import "./Expenses.css";
import Card from "../UI/Card"

function Expense({items}){


    return(
      <Card>
      { 
         items.map((element )=> {
         return <ExpenseItem title={element.title} amount={element.amount} date={element.date} location={element.LocationOfExpenditure} />
      })
    }
    </Card>
    )
    }
export default Expense;