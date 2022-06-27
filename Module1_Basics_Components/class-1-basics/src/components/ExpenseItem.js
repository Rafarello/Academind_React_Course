import '../styles/ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem({title, amount, date}) {
  const expenseTitle = title;
  const expenseAmount = amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
