import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
export default function Employee() {
  let navigate=useNavigate();
  const [users,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:4000/users");
    setUser(result.data);
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:4000/users/${id}`);
     loadUsers();
  }
  const onSubmit=()=>{
    let flag=1;
    let name=document.getElementById("Search").value ;
    users.map((users,index)=>{
        if(users.name===name||users.email===name){
          navigate(`/User/${users.id}`);
          flag=2;
        }else{
          if(flag===2){
            flag=2;
          }
          else{
            flag=1;
          }
        }
    })
    if(flag===1){
      alert("Employee named "+name+" Not Found.");
    }
  }
  return (
    <div id="HomeDiv" >
      
      <input type={"text"} name='search' id="Search" placeholder='Search' ></input>
      <button className='btn btn-success' onClick={e=>onSubmit(e)}>Search</button>
      <h1 style={{textAlign:"center",color:"white",textShadow:"5px 5px 5px black"}}>Employee Data</h1>
      <table class="table table-sm table-dark text-center mt-5">
        
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Id Proof </th>
              <th>Service</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.proof}</td>
                  <td>{user.service}</td>
                  <td>{user.salary}</td>
                  
                  <td>
                    <Link to={`/User/${user.id}`}><button className='btn btn-primary'>View</button></Link>
                    <Link to={`/EditUser/${user.id}`}><button className='btn btn-success'>Edit</button></Link>
                    <Link onClick={()=>DeleteUser(user.id)}><button className='btn btn-danger'>Delete</button></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
      <Link to="/register" className='btn btn-success' style={{marginLeft:"91%"}}>Add Employee</Link>
    </div>
  )
}