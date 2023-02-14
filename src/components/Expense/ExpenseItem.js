import './ExpenseItem.css'
import ExpensesDate from './ExpensesDate';
import ExpensesDetails from './ExpensesDetails';

function ExpenseItem(props){
   
    return( 
        <div  className='expense-item'>
          <ExpensesDate  date={props.date}/>
          <ExpensesDetails amount={props.amount} title={props.title}/>  
        </div>
    );
    
}

export default ExpenseItem;