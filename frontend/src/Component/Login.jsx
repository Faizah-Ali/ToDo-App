import React,{useState} from 'react';
import axios from 'axios';
import List from './List';




export default function Login() {

    const[name,setname]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const[isLoggedIn,setIsLoggedIn]=useState(false);


    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:4000/login',{
                name,
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



    <div>
      {/* <h1>Login Form</h1> */}
      {isLoggedIn ? (<List/>) : (<form onSubmit={handleSubmit}>
      
        <div><label htmlFor='name'>Username</label>
      <input type='text' id='name' value={name} onChange={(e)=>setname(e.target.value)}required />
      </div>
      <div ><label >password</label>
      <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}required />
      </div>

        <button type="submit">submit</button>
      </form>
      )}
      {error}
    </div>
  )
}
