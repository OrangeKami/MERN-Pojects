import React, { useContext }from 'react';
import { GlobalContext } from '../context/GlobelState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amout);
  console.log(amounts);
  const total = amounts.reduce((a,b) => a + b, 0).toFixed(2);
 
  return (
    <div>
      <h4>Your Balance</h4>
    <h1 id='balance'>${total}</h1>
    </div>
  )
}
