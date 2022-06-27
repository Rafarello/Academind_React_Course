import React from 'react';
import './styles/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

function Expenses({expensesArray, onFilterChange}) {
  return (
    <div className="expenses">
      <ExpensesFilter
        onFilterChange={onFilterChange}
      />
      {expensesArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
}

export default Expenses;
