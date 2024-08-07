import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput';
import Form from './Components/Form';
import Transaction from './Components/Transaction';

function App() {
const title = "FLATIRON BANK";
const [transactions, setTransactions] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/transactions')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setTransactions(data)
  })
  // .catch(error => console.log(error))
},[])

  return (

   <div className='App'>
      <h1 className='title'>{title}</h1>
      <Form transactions={transactions} setTransactions={setTransactions}/> 
      <SearchInput />
      <Transaction transaction={transactions} />
    </div>
  )
}

export default App;


