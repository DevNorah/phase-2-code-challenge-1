import { useEffect, useState } from 'react';
import './App.css';
import SearchInput from './Components/SearchInput';
import Form from './Components/Form';
import Transaction from './Components/Transaction';

function App() {
const title = "FLATIRON BANK";
const [transactions, setTransactions] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/transactions')
  .then(res => res.json())
  .then(transactions => console.log(transactions))
  .catch(error => console.log(error))
},[])

  return (

   <div className='App'>
      <h1 className='title'>{title}</h1>
      <Form /> 
      <SearchInput />
      <Transaction />
    </div>
  )
}

export default App;


