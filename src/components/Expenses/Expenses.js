import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const onYearChangeHandler = (yearReceived) => {
    // console.log("expenses.js");
    // console.log(yearReceived);
    setYear(yearReceived);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onYearChange={onYearChangeHandler} year={year} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
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
