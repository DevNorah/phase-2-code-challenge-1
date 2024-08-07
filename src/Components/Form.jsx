import React, { useState } from 'react'

const Form = ({transactions, setTransactions}) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: ''
  }) 

  const handleOnchange = (event) => {
    const name = event.target.name
    const value = event.target.value

    //updating state
    setFormData({
        ...formData, [name]: value
    })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setTransactions([...transactions, formData])
  }
 


  return (
   <div className="Form">

     <form onSubmit={handleSubmit}>
        
        <input type="text" name='description' placeholder='Description' value={formData.description} onChange={handleOnchange}/>
        <input type="text" name='category' placeholder='Category' value={formData.category} onChange={handleOnchange}/>
        <input type="number" name='amount' placeholder='Amount' value={formData.amount} onChange={handleOnchange}/>
        <input type="date" name='date' placeholder='Date' value={formData.date} onChange={handleOnchange}/>
        <input type="Submit" value="Submit" />

      </form>
   </div>
  
  )
}

export default Form