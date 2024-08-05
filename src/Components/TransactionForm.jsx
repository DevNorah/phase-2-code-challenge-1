import React, { useEffect, useState } from 'react'

const TransactionForm = () => {
  
  return (
   <div className="transactionForm">
    
     
     <form>
        <input type="text" placeholder='Description'/>
        <input type="number" placeholder='Amount'/>
        <input type="date" placeholder='Date'/>
        <input className="submit-btn" onClick = {() => alert('Submitted')}type="Submit" value="Submit" /><br /><br />

        </form>
   </div>
  
  )
}

export default TransactionForm