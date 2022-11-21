import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import expenses from "./components/Expense/data";
import NewExpense from "./components/Expense/NewExpense/NewExpense";

const App = (props) => {
  const [exp, setExp] = useState(expenses);

  const addNewExpense = (expense) => {
    setExp((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses items={exp} />
    </div>
  );
};

export default App;
