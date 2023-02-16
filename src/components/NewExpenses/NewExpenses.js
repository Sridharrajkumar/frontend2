import React,{useState} from "react";
import ExpensesForm from "./ExpensesForm";

import './NewExpenses.css';

function NewExpenses(props)
{
    const[isEditing,SetIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()

        };
        props.onAddExpense(expenseData);
    }

    const startEditing =() =>{
        SetIsEditing(true);
    }

    const stopEditing =( )=>{
        SetIsEditing(false);

    }

    return (
    <div className="new-expense">
        {!isEditing &&<button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
    );
};

export default NewExpenses;