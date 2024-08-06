import React, { useState } from 'react';
import useTransactions from '../hooks/useTransactions';

const AddTransactionPage = () => {
  const { addTransaction } = useTransactions();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const newTransaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type
      };
      addTransaction(newTransaction);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionPage;
