import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTransactionPage from './pages/AddTransactionPage';
import TransactionsPage from './pages/TransactionsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTransactionPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
