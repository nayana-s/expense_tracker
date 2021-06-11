import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, selectedFilterYear] = useState("2020");

  const expenseFilterChangeHandler = (selectedYear) => {
    selectedFilterYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let ExpenseContent = <p>No expense found</p>;
  if (FilteredExpenses.length > 0 ) {
    ExpenseContent = FilteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onExpenseFilterChange={expenseFilterChangeHandler}
        />
        {ExpenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
