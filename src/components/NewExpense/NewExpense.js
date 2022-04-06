import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showNewFormButton, setShowNewFormButton] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  };
  const showNewExpenseFormHandler = () => {
    setShowNewFormButton((prev) => {
      return !prev;
    });
  };
  return (
    <div className="new-expense">
      {showNewFormButton?<button onClick={showNewExpenseFormHandler}>New new expense</button>:<ExpenseForm hiddenAll={showNewExpenseFormHandler} onSaveDateExpense={saveExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
