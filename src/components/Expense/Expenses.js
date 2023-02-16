import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
//import "./Expenses.css";
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';

function Expense({items}){
  const[filteredYear,setFilteredYear]=useState('2020');
  function filterchangeHandler(selectedYear){
    
    setFilteredYear(selectedYear);

  }

  const filtersExpensesYear = items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
    return(
      <div>
      <Card>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler}/>
      { 
         filtersExpensesYear.map((element )=> {
         return <ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} location={element.LocationOfExpenditure} />
      })
    }
    </Card>
    </div>
    )
    }
export default Expense;