
import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses=[
    {title:'car insurance', amount:500.50 ,date: new Date(2023, 0, 6) , LocationOfExpenditure:'car showroom'},
    {title:'bike insurance', amount:255.60 ,date: new Date(2023, 3, 6) , LocationOfExpenditure:'bike showroom'},
    {title:'house insurance', amount:1050.70 ,date: new Date(2023, 6, 6) , LocationOfExpenditure:'house emi'},
    {title:'hotel', amount:50.50 ,date: new Date(2023, 11, 6) , LocationOfExpenditure:'hotel restaurant'},
     
  ]
  return (
    <div>
      {
        
        expenses.map((element )=> {
           return <ExpenseItem title={element.title} amount={element.amount} date={element.date} location={element.LocationOfExpenditure} />
        })
      }
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expees[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].LocationOfExpenditure}></ExpenseItem>
      */}
    </div>
  );
}

export default App;



