import React,{useState} from 'react';
import axios from 'axios';
import List from './List';
import Image from './Assets/sideimg.png'; 
import './CSS/Login.css';




export default function Login() {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(false);


    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:4000/login',{
                email,
                password
            });

            if(response.data.status) {
                setIsLoggedIn(true);

            }else{
                setError('Invalid name or password');
            }
        }catch(error) {
            setError('An error occured while trying to logged in');
        }


    };

  return (
    <div className="signup-container">
      
    <div className="signup-image">
      <img src={Image} className="sideimg" alt="Signup Background" />
    </div>
    <div className="signup-form">
      <h1>Login</h1>
      {isLoggedIn ? (<List/>) : (<form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label>Email</label>
          <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your email" required />
        </div>
       
        <div className="form-group">
          <label>Password</label>
          <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required />
        </div>
       
       
        <button type="submit" className="signup-button">Login</button>
      </form>
      )}
      {error}
      <p className='login-para'>Don't Have Account ? <a href="/login">Signup</a></p>
    </div>
  </div>




   
  )
}
