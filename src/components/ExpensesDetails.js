function ExpensesDetails(props)
{
    return (
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='Location_Of_Expenses'>{props.location}</div>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
    );

}

export default ExpensesDetails;