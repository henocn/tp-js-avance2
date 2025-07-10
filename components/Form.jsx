import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="POST">
        <div className="name-div">
          <label htmlFor="name" className="name-label"></label>
          <input type="text" className="name-input" id='name' name='name' />
        </div>
        <div className="email-div">
          <label htmlFor="" className="email-label"></label>
          <input type="email" className="email-input" id='email' name='email' />

        </div>
        <div className="phone-div">
          <label htmlFor="phone" className="phone-label"></label>
          <input type="text" className="phone-input" id='phone' name='phone' />
        </div>
      </form>
    </div>
  )
}

export default Form