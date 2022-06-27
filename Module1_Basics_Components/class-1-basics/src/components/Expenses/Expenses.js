import React, {useState} from 'react';
import './styles/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

function Expenses({expensesArray}) {
  const [yearFilter, setYearFilter] = useState('2022');

  const filterYearHandler = ({target}) => {
    setYearFilter(target.value);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        yearSelected={yearFilter}
        onFilterChange={filterYearHandler}
      />
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
