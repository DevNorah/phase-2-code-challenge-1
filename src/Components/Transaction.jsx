import React from 'react'



function Transaction({transaction}) {
  return (
    <div className='transaction'>
        <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {transaction.map((transaction) => (
                <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Transaction