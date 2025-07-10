import React from 'react'

const Form = () => {
  return (
    <div>
      <form method="POST" className='form'>
        <div className="name-div">
          <label htmlFor="name" className="name-label">Your name</label>
          <input type="text" className="name-input" id='name' name='name' />
        </div>
        <div className="email-div">
          <label htmlFor="" className="email-label">Enter email</label>
          <input type="email" className="email-input" id='email' name='email' />

        </div>
        <div className="phone-div">
          <label htmlFor="phone" className="phone-label">Phone number</label>
          <input type="text" className="phone-input" id='phone' name='phone' />
        </div>
        <div className="submit-div">
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  )
}

export default Form