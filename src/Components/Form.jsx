import React, { useState } from 'react';

const Form = ({ setTransactions }) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newTransaction => {
      setTransactions(newTransaction);
    })
    .catch(error => console.log(error));
    
    setFormData({
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" name='description' placeholder='Description' value={formData.description} onChange={handleOnChange} />
        <input type="text" name='category' placeholder='Category' value={formData.category} onChange={handleOnChange} />
        <input type="number" name='amount' placeholder='Amount' value={formData.amount} onChange={handleOnChange} />
        <input type="date" name='date' placeholder='Date' value={formData.date} onChange={handleOnChange} />
        <input className="submit-btn"type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
