import React from 'react';
import { useTransactions } from '../hooks/useTransactions';

const Home = () => {
  const { summary } = useTransactions();

  return (
    <div className="container mt-5">
      <h1 className="text-center">Summary</h1>
      <div className="row">
        <div className="col">
          <div className="card bg-success text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Income</h5>
              <p className="card-text">${summary.income.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-danger text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Expenses</h5>
              <p className="card-text">${summary.expenses.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Savings</h5>
              <p className="card-text">${summary.savings.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
