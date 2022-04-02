import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const {  email, password } = formData

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
                <FaUser /> Login 
                <p>Login and start setting goals</p>    
            </h1>
        </section>


        <section className="form">
            <form onSubmit={onSubmit}>
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
                    <button type="submit" className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
  </>
    )}

export default Login