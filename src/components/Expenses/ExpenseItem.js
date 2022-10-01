import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'
// import './ExpenseItem.css'

function ExpenseItem(props) {
  const ClickHandler = () =>{
    console.log('Clicked!!!')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div> 
        {/* <button onClick={ClickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem
