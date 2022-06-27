import './styles/ExpenseItem.css';
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';

function ExpenseItem({title, amount, date}) {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const expenseAmount = amount;


  const clickHandler = () => {
    setExpenseTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
