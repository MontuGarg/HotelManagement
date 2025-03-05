import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
export default function CustDetail() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        proof:"",
        service:"",
        salary:"",
        password:""

    })
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async ()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`)
        setUser(result.data);

    }
  return (
    <div >
        <div style={{backgroundImage:"url('https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-smile-happy-relax-around-swimming-pool-hotel-resort_74190-9164.jpg?w=1060&t=st=1666083496~exp=1666084096~hmac=876bafa4d56a7d5245505490f3b0d4e3415c2cef19e3368b6166b6d331c01a52')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
            <Link to="/employee"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
            <div id="custDiv">
                <img src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png' style={{width:"20%",margin:"-10% 0% 5% 16%"}}></img>
                <h1>Employee Details</h1>
                <table className='table table-bordered '>
                    <tr><td>Name </td><td>{user.name}</td> </tr>
                    <tr><td>E-mail </td><td>{user.email}</td></tr>
                    <tr><td>Mobile </td><td>{user.phone}</td> </tr>
                    <tr><td>Id Proof </td><td>{user.proof}</td></tr>
                    <tr><td>Service </td><td>{user.service}</td></tr>
                    <tr><td>Salary </td><td>{user.salary}</td></tr>
                    <tr><td>Password</td><td>{user.password}</td></tr>
                </table>
            </div>
        </div>
        
    </div>
  )
}