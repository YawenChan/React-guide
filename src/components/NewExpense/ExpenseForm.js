import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm =(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // 1. 一樣可以取值，但值一多可能會出錯(不建議這樣寫)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        // 2. 能確保react給予最新狀態的值
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,enteredTitle:event.target.value
        //     };
        // })
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //         ...userInput,
        //         enteredAmount:event.target.value,
        //     })


       
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })

    }

    const submitHandler = (event) =>{
        event.preventDefault(); // 關掉form表單預設送出會讓畫面閃一下的動作

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // 此function示範react表單中的重要概念 ： 雙向綁定（Two-way binding）
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                 <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                    <label>amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                 </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;