import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(Date.UTC(2020, 7, 14, 3)),
    // date:new Date()
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const[expenses , setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) =>{
    // setExpenses([expense, ...expenses]);  
    // 將新創的資料放在陣列第一個,第二個用展開符號將之前的資料帶進陣列
    // 但這個方法雖然會起作用但不會100%正確，要取得之前的參數應該用react useState內建的參數=>prevExpenses，如下：
    // 此為最乾淨的處理方式
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpenses
        onAddExpense={addExpenseHandler}

      />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
