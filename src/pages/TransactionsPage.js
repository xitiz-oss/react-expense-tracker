import React from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionsPage = () => {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div className="container mt-5">
      <h1 className="text-center">Transactions</h1>
      <ul className="list-group">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{transaction.description}</span>
            <span>${transaction.amount.toFixed(2)}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
