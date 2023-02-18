import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
//import "./Expenses.css";
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expense({items}){
  const[filteredYear,setFilteredYear]=useState('2020');
  function filterchangeHandler(selectedYear){
    
    setFilteredYear(selectedYear);

  }

  const filtersExpensesYear = items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent=<p>No Expenses Is Found</p>
  
  if(filtersExpensesYear.length === 1)
  {
    expensesContent=filtersExpensesYear.map((element )=> {
      return (<div>
       <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} location={element.LocationOfExpenditure} />
       <p>Only single Expense here. Please add more...</p>
         </div>
    )
      
   })
  }
  else if(filtersExpensesYear.length > 1)
  {
    expensesContent=filtersExpensesYear.map((element )=> {
      return (<ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} location={element.LocationOfExpenditure} />)
      
   })

  }
    return(
      <div>
      <Card>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler}/>
      <ExpensesChart expenses={filtersExpensesYear}/>
      {expensesContent}
    </Card>
    </div>
    )
    }
export default Expense;