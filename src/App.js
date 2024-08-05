import './App.css';
import TransactionForm from './Components/TransactionForm';
import Transactions from './Components/Transactions';

function App() {
const title = "FLATIRON BANK";

  return (

   <div className='App'>
      <h1 className='title'>{title}</h1>
      <TransactionForm /> 
      <Transactions />
    </div>
  )
}

export default App;


