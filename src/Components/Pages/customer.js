import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
export default function Customer() {
  const [users,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:4000/customer");
    setUser(result.data);
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:4000/customer/${id}`);
     loadUsers();
  }
  
  return (
    <div id="HomeDiv" style={{backgroundImage:"url('https://img.freepik.com/free-photo/living-room-interior-with-armchair-empty-dark-blue-wall-background-3d-rendering_41470-4172.jpg?w=1060&t=st=1666029016~exp=1666029616~hmac=291510d2bbd3d1ce2319b1033b793dbde8e2b64d35c8accf465fa2b69aa65bb0')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm",color:"white"}}>
      
      
      <h1 style={{textAlign:"center",textShadow:"5px 5px 5px black",}}>Customers</h1>
      
      <table class="table table-sm table-dark text-center mt-5">
        
          <thead >
            <tr >
              <th>#</th>
              <th>Profile Pic.</th>
              <th>Name</th>
              <th>Mobile no.</th>
              <th>Id Proof</th>
              <th>Members</th>
              <th>Room no.</th>
              <th>Address</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <th>{index+1}</th>
                  <th><img src={user.image} style={{width:"30px" ,height:"25px",borderRadius:"50%"}}></img></th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.proof}</td>
                  <td>{user.member}</td>
                  <td>{user.room}</td>
                  <td>{user.address}</td>
                  <td>{user.check}</td>
                  <td>{user.checkO}</td>
                  <td>
                    <Link to={`/custdetail/${user.id}`}><button className='btn btn-primary'>View</button></Link>
                    <Link to={`/editcust/${user.id}`}><button className='btn btn-success'>Edit</button></Link>
                    <Link onClick={()=>DeleteUser(user.id)}><button className='btn btn-danger'>Delete</button></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
      <Link style={{marginLeft:"90%"}}className='btn btn-success' to="/addCust">Add Customer</Link>
    </div>
  )
}