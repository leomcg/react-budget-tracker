import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const onYearChangeHandler = (yearReceived) => {
    setYear(yearReceived);
  };

  return (
    <div>
      <ExpenseFilter onYearChange={onYearChangeHandler} year={year} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
