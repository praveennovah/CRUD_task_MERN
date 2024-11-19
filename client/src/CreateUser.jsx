import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
function CreateUser() {


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState();
  const navigate =useNavigate()


 const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try{
      await axios.post("http://localhost:7000/v1/CreateUser",{name,email,age})
    .then(result => console.log(result))
    navigate("/")
    }
    catch(err){
    console.log(err)
    }
 }

 
  return (
    <div className='d-flex vh-100  justify-content-center  '>
        <div className='w-50 rounded p-3'>
            <h1 style={{color:'white', padding:8, backgroundColor: 'black', textAlign:'center'}}>Register</h1>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                 <input type="text" class="form-control" style={{borderColor:"black",borderWidth:"3px"}} 
                  placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
            </div>  
            <div class="mb-3">
                 <input type="email" class="form-control" style={{borderColor:"black",borderWidth:"3px"}}
                  placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div> 
            <div class="mb-3">
                 <input type="number" class="form-control"style={{borderColor:"black",borderWidth:"3px"}}
                  placeholder="Age" required onChange={(e)=>setAge(e.target.value)}/>
            </div> 
            <div>
                <button className='btn btn-dark'>Create</button>
            </div>
            

            </form>
        </div>
    </div>
  )
}

export default CreateUser