<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../src/Users.css";
import axios from 'axios';
function Users() {

    const [users,setUsers]=useState([]);

    useEffect( ()=> {
     const fetchUsers = async ()=>{
      try {
        const getuser = await axios.get("http://localhost:8081/");
        setUsers(getuser.data)
        console.log(getuser.data);
       
      } catch (error) {
        console.log(error)
      }
     }
     fetchUsers();
    },[]);


    const handleDelete =async(id)=>{
      try{
        const deletedItem = await axios.delete("http://localhost:8081/DeleteUser/" +id);
        console.log(deletedItem,"Deleted Successfully");
        window.location.reload();
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">CRUD OPERATIONS USING MERN</span>
    </div>
  </nav>
  <hr />
  <div>
  <Link to="/create" class="btn btn-success col-12" >Add User</Link>
    <table className="table table1">
    <thead>
      <tr>
        <th >Name</th>
        <th >Email</th>
        <th >Phone</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
        {
        users.map((user,key)=>{
         return  <tr key={key}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><Link to={`/update/${user._id}`} className="btn btn-success " >Update</Link>
            <button onClick={(e)=>handleDelete(user._id)} className="btn btn-danger">Delete</button></td>
          </tr>
                         })
        }
      
      </tbody>
      </table>
    
  </div>
    
      </>

      )
}

=======
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../src/User.css";
import axios from 'axios';
function Users() {

    const [users,setUsers]=useState([]);

    useEffect( ()=> {
     const fetchUsers = async ()=>{
      try {
        const getuser = await axios.get("http://localhost:7000/v1");
        setUsers(getuser.data)
        console.log(getuser.data);
       
      } catch (error) {
        console.log(error)
      }
     }
     fetchUsers();
    },[]);


    const handleDelete =async(id)=>{
      try{
        const deletedItem = await axios.delete("http://localhost:7000/v1/DeleteUser/"+id);
        console.log(deletedItem,"Deleted Successfully");
        window.location.reload();
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">CRUD OPERATIONS USING MERN</span>
    </div>
  </nav>
  <hr />
  <div>
  <Link to="/create" class="btn btn-success col-12" >Add User</Link>
    <table className="table table1">
    <thead>
      <tr>
        <th >Name</th>
        <th >Email</th>
        <th >Age</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
        {
        users.map((user,key)=>{
         return  <tr key={key}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td><Link to={`/update/${user._id}`} className="btn btn-success " >Update</Link>
            <button onClick={(e)=>handleDelete(user._id)} className="btn btn-danger">Delete</button></td>
          </tr>
                         })
        }
      
      </tbody>
      </table>
    
  </div>
    
      </>

      )
}

>>>>>>> initial commit
export default Users