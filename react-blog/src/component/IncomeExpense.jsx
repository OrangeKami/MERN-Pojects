import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobelState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions.filter((trans) => trans.amout > 0);
  const incomesArr = incomes.map((income) => income.amount);
  const totalIncome = incomesArr.reduce((a, b) => a + b, 0);
  const expenses = transactions.filter((trans) => trans.amount < 0);
  const expensesArr = expenses.map((exp) => exp.amount);
  const totalExpenses = expensesArr.reduce(
    (total, expense) => total + expense,
    0
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(totalExpenses)}
        </p>
      </div>
    </div>
  );
}
