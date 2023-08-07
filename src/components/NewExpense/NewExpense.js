import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showAddNewExpenseButton, setShowAddNewExpenseButton] = useState(true);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    cancelNewExpense();
  };

  const cancelNewExpense = () => {
    setShowAddNewExpenseButton(true);
  };

  const addNewExpenseButtonHandler = () => {
    setShowAddNewExpenseButton(false);
  };

  return (
    <div className="new-expense">
      {showAddNewExpenseButton && (
        <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
      )}
      {!showAddNewExpenseButton && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          cancelExpense={cancelNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
