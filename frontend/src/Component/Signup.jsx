import React,{useState} from 'react';
import axios from 'axios';
//import Emplist from './Emplist';




export default function Signup() {


    const [formData , setFormData] = useState({
        name : '',
        email : '',
        password : '',
        phone : '',
    });

    // const[name,setname]=useState('');
    // const[email,setEmail]=useState('');
    // const[password,setPassword]=useState('');
    // const[phone,setPhone]=useState('');

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
       });
    };
    

    const handleSubmit = async (event) =>{

        event.preventDefault();
        try{
            console.log(formData);
            const response=await axios.post('http://localhost:4000/signup',formData)
        

            if(response.data.success) {
                console.log('Signup Successful');

            }else{
                console.error('Signup Failed');
            }
        }catch(error) {
            console.error('Error:',error);
        }


    };

  return (



    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone No.</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

