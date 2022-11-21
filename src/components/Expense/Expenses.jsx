import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";
import ExpenseChart from "./Chart/ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeYear = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeYear}
        selected={filteredYear}
      />
      <ExpenseChart expenses={filteredExpense} />
      {filteredExpense.length === 0 && (
        <p className="expenses-list__fallback">No Expense found</p>
      )}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </Card>
  );
};

export default Expenses;
