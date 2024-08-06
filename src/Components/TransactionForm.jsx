import React, { useEffect, useState } from 'react'

const TransactionForm = () => {
  
  return (
   <div>
    
     
     <form className="transactionForm">
        
        <input type="text" placeholder='Description'/>
        <input type="text" placeholder='Category'/>
        <input type="number" placeholder='Amount'/>
        <input type="date" placeholder='Date'/>
        <input className="submit-btn" onClick = {() => alert('Submitted')}type="Submit" value="Submit" /><br /><br />

      </form>
   </div>
  
  )
}

export default TransactionForm