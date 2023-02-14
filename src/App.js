
import React from 'react';
import Expenses from "./components/Expense/Expenses";
import ExpensesForm from './components/ExpensesForm';

function App() {

  const expenses=[
    {title:'car insurance', amount:500.50 ,date: new Date(2023, 0, 6) , LocationOfExpenditure:'car showroom'},
    {title:'bike insurance', amount:255.60 ,date: new Date(2023, 3, 6) , LocationOfExpenditure:'bike showroom'},
    {title:'house insurance', amount:1050.70 ,date: new Date(2023, 6, 6) , LocationOfExpenditure:'house emi'},
    {title:'hotel', amount:50.50 ,date: new Date(2023, 11, 6) , LocationOfExpenditure:'hotel restaurant'},
     
  ]
  return (
    <div>

      <ExpensesForm />
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;



