
import React,{useState} from 'react';
import Expenses from "./components/Expense/Expenses";
import NewExpenses from './components/NewExpenses/NewExpenses';
  

const dummyexpenses=[
  {id:'e1',title:'car insurance', amount:500.50 ,date: new Date(2023, 0, 6) , LocationOfExpenditure:'car showroom'},
  {id:'e2',title:'bike insurance', amount:255.60 ,date: new Date(2022, 3, 6) , LocationOfExpenditure:'bike showroom'},
  {id:'e3',title:'house insurance', amount:1050.70 ,date: new Date(2021, 6, 6) , LocationOfExpenditure:'house emi'},
  {id:'e4',title:'hotel', amount:50.50 ,date: new Date(2020, 11, 6) , LocationOfExpenditure:'hotel restaurant'},
   
]

function App() {
  const[expenses,setExpenses]=useState(dummyexpenses)

  function addExpenseHandler(expense){
    setExpenses((preExpenses) =>{
      return [expense, ...preExpenses]

    });
  }


  return (
    <div>

      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;



