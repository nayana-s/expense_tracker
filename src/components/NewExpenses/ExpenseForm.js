import React, {useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const TitleChangeHandler = (event)=> {
        SetEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    };

    const AmountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const DateChangeHandler = (event) => {
        SetEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
            props.onSaveExpenseData(expenseData);
            SetEnteredTitle('');
            SetEnteredAmount('');
            SetEnteredDate('');
    };

    return(
        <form onSubmit={SubmitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div> 
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;