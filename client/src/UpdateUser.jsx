import React, { useState,useEffect } from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"
function UpdateUser() {

  const {id}= useParams();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState();
  const navigate =useNavigate()



  useEffect( ()=> {
    const fetchUsers =async ()=>{
     try {
       const result = await axios.get("http://localhost:7000/v1/getUser/" +id)
       console.log(result)
       setName(result.data.name)
       setEmail(result.data.email)
       setAge(result.data.age)
     } 
     catch (error) {
       console.log(error)
     }
    }
    fetchUsers();
   },[id]);
    
   const handleSubmit = (e)=>{
    e.preventDefault();
    
    try{
      axios.put("http://localhost:7000/v1/UpdateUser/"+id ,{name,email,age})
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
            <h1 style={{color:'white', padding:8, backgroundColor: 'black', textAlign:'center'}}>Update</h1>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                 <input type="text" class="form-control" style={{borderColor:"black",borderWidth:"3px"}} 
                  placeholder="Name"value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>  
            <div class="mb-3">
                 <input type="email" class="form-control" style={{borderColor:"black",borderWidth:"3px"}}
                  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div> 
            <div class="mb-3">
                 <input type="number" class="form-control"style={{borderColor:"black",borderWidth:"3px"}}
                  placeholder="Number"value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div> 
            <div>

                <button className='btn btn-dark'>Update</button>
            </div>
            

            </form>
        </div>
    </div>
  )
}

export default UpdateUser