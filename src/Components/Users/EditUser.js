import React, { useState,useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate,useParams} from "react-router-dom";
export default function EditUser() {
    let history=useNavigate();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        proof:"",
        service:"",
        salary:"",
        password:""

    })
    const {name,email,password,phone,proof,salary,Manager,Chef,Cleaner,Security,Aadhaar,PanCard,Driving}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/users/${id}`,user);
        history("/employee");
    }
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
    }

  return (
    
       
    <div style={{backgroundImage:"url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
        <Link to="/employee"style={{height:"auto",marginLeft:"-10px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        
        <div id="addCust">
            <h1 style={{color:"white",marginLeft:"20px"}}>Edit Details</h1>
            <form onSubmit={e=>onSubmit(e)}>
                <table style={{color:"white"}}>
                    <tr>
                        <td >
                            Name :<input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            Mobile :<input type="number" name='phone' value={phone} placeholder="Mobile no." required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                        Id Proof :<select onChange={e=>onValChange(e)} name="proof" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Aadhaar}>Aadhaar</option>
                                        <option value={PanCard}>Pan Card</option>
                                        <option value={Driving}>Driving License</option>
                                        
                                    </select></td>
                        <td>
                        Salary :<input type="number" name='salary'  value={salary} placeholder="Salary" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Email :<input type="email" name='email'  value={email} placeholder="Email" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                        Password : <input type="password" name='password'  value={password} placeholder="Password" required onChange={e=>onValChange(e)}class="form-control "/>
                           
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                    Service :<select onChange={e=>onValChange(e)} name="service" className='form-control dropdown'>
                                        <option>Service</option>
                                        <option value={Manager}>Manager</option>
                                        <option value={Chef}>Chef</option>
                                        <option value={Cleaner}>Cleaner</option>
                                        <option value={Security}>Security</option>
                                    </select>
                                    </td> 
                    </tr>
                    <tr >
                        <td colSpan={2}>
                        <button className='btn btn-success form-control' >Update</button>
                        </td>
                    </tr>
                </table>
                
            </form>

        </div>
    </div>
  )
}