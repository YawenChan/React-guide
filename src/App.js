
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpense';


const App = () => {
  const expenses = [
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

//const DateFunc = newDate()
  const addExpenseHandler = (expenseData) =>{
    console.log(expenseData)
    console.log("In App.js");
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
