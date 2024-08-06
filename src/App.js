import './App.css';
import SearchInput from './Components/SearchInput';
import TransactionForm from './Components/TransactionForm';
import Transactions from './Components/Transactions';

function App() {
const title = "FLATIRON BANK";

  return (

   <div className='App'>
      <h1 className='title'>{title}</h1>
      <TransactionForm /> 
      <SearchInput />
      <Transactions />
    </div>
  )
}

export default App;


