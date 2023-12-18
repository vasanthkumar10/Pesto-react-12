import React, { useMemo, useState } from "react";

const TransactionList = ({ transactions }) => {
  const [showExpenses, setShowExpenses] = useState(true);

  // Use useMemo to memoize the filtered transactions
  const filteredTransactions = () => {
    console.log("Filtering Transactions");
    return transactions.filter((transaction) =>
      showExpenses ? transaction.type === "expense" : true
    );
  };

  // Calculate the total amount using useMemo
  const totalAmount = () => {
    console.log("Calculating Total Amount");
    return filteredTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <div>
        <label>
          Show Expenses
          <input
            type="checkbox"
            checked={showExpenses}
            onChange={() => setShowExpenses(!showExpenses)}
          />
        </label>
      </div>
      <ul>
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default TransactionList;
