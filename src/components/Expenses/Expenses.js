import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props){
    const [filteredYear, setFilteredYear]=useState('2020');
    const filterChangeHandler = (year) => {
        console.log('in expenses.js');
        // console.log(year)
        setFilteredYear(year)
        console.log('useState',filteredYear)
    }

    return(
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                /> */}
            </Card>
    )
}
export default Expenses;