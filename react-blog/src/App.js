import "./App.css";
import Header from "./component/Header.jsx";
import Balance from "./component/Balance";
import IncomeExpense  from './component/IncomeExpense';
import { TransactionList } from "./component/TransactionList.jsx";
import { AddTransaction } from "./component/AddTransaction";
import { GlobalProvider } from "./context/GlobelState.jsx";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

