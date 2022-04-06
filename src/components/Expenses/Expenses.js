import { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [expensesFilter, setExpensesFilterYear] = useState("2020");
  const saveFilterDate = (date) => {
    setExpensesFilterYear(date);
  };
  const expensesFiltered = props.expenses.filter(
    (expense) => expense.date.getFullYear() == expensesFilter
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={expensesFilter}
          onFilterDate={saveFilterDate}
        />
        <ExpensesChart expenses={expensesFiltered}/>
        <ExpensesList items={expensesFiltered} />
      </Card>
    </div>
  );
};
export default Expenses;
