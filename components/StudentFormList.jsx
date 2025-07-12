import React, { useState } from 'react'
import '../components/styles/studentlist.css'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState([])
  

  const handleSubmit = (event) =>{
    event.preventDefault();
    setStudents([...students, {name, email, phone}])
    console.log(students)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
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

      <table className='table table-bordered table-responsive'>
            <thead className=''>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
              {students.map((student, _) => (
                  <tr key={_} className='tr'>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                  </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Form