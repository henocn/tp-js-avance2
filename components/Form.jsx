import React, { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your name</label>
          <input type="text" className="form-input" id='name' name='name' value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Enter email</label>
          <input type="email" className="form-input" id='email' name='email' value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input type="text" className="form-input" id='phone' name='phone' value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-submit">Envoyer</button>
        </div>
      </form>
    </div>
  )
}

export default Form