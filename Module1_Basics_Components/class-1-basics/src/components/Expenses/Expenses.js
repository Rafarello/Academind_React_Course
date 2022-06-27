import React from 'react';
import './styles/Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({expensesArray}) {
  return (
    <div className="expenses">
      {expensesArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
