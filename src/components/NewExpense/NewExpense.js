import React from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    }

    console.log('new-expense: ', expenseData)
  }


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense