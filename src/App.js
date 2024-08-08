import React, { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput';
import Form from './Components/Form';
import Transaction from './Components/Transaction';

function App() {
  const title = "FLATIRON BANK";
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (query) => {
    const filtered = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredTransactions(filtered);
  };

  const handleNewTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  return (
    <div className='App'>
      <h1 className='title'>{title}</h1>
      <SearchInput onSearch={handleSearch} />
      <Form transactions={transactions} setTransactions={handleNewTransaction} />
      {filteredTransactions.length > 0 ? (
        <Transaction transaction={filteredTransactions} />
      ) : (
        <p>No transactions found</p>
      )}
    </div>
  );
}

export default App;
