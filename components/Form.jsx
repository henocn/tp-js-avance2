import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([])
  

  const handleSubmit2 = (event) =>{
    event.preventDefault();
    alert('NAME: ' + name + ' EMAIL: ' + email + ' PHONE: ' + phone);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit2}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your name</label>
          <input type="text" className="form-input" id='name' name='name' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Enter email</label>
          <input type="email" className="form-input" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input type="text" className="form-input" id='phone' name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-submit">Envoyer</button>
        </div>
      </form>
    </div>
  )
}

export default Form