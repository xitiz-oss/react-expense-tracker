import React, { useState } from 'react';
import useTransactions  from '../hooks/useTransactions';

const SettingsPage = () => {
  const { state, dispatch } = useTransactions();
  const [currency, setCurrency] = useState(state.settings.currency);

  const handleSaveSettings = () => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: { currency } });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Settings</h1>
      <div className="mb-3">
        <label className="form-label">Currency</label>
        <input
          type="text"
          className="form-control"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block" onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
