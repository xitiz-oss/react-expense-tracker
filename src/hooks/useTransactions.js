import { useContext, useMemo, useCallback } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const useTransactions = () => {
  const { state, dispatch } = useContext(TransactionContext);

  const addTransaction = useCallback(
    (transaction) => {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    },
    [dispatch]
  );

  const editTransaction = useCallback(
    (transaction) => {
      dispatch({ type: 'EDIT_TRANSACTION', payload: transaction });
    },
    [dispatch]
  );

  const deleteTransaction = useCallback(
    (id) => {
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    },
    [dispatch]
  );

  const summary = useMemo(() => {
    const income = state.transactions
      .filter((t) => t.type === 'Income')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const expenses = state.transactions
      .filter((t) => t.type === 'Expense')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const savings = state.transactions
      .filter((t) => t.type === 'Savings')
      .reduce((acc, curr) => acc + curr.amount, 0);

    return { income, expenses, savings };
  }, [state.transactions]);

  return { transactions: state.transactions, addTransaction, editTransaction, deleteTransaction, summary };
};

export default useTransactions;
