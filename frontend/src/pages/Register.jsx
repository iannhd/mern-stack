import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2:''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (<>
        <section>
            <h1>
                <FaUser /> Register 
                <p>Please create an account</p>    
            </h1>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="text"
                    name="name"
                    id="name"
                    className='form-control'
                    value={name}
                    placeholder="Enter your name"
                    onChange={onChange}
                />    
                </div>
                <div className="form-group">
                <input type="email"
                    name="email"
                    id="email"
                    className='form-control'
                    value={email}
                    placeholder="Enter your Email"
                    onChange={onChange}
                />    
                </div>
                <div className="form-group">
                <input type="password"
                    name="password"
                    id="password"
                    className='form-control'
                    value={password}
                    placeholder="Enter your password"
                    onChange={onChange}
                />    
                </div>
                <div className="form-group">
                <input type="password"
                    name="password2"
                    id="password2"
                    className='form-control'
                    value={password2}
                    placeholder="Confirm your password"
                    onChange={onChange}
                />    
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
  </>
    )}

export default Register