import React ,{useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate,useParams} from "react-router-dom";
export default function EditCust() {
    let history=useNavigate();
    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        phone:"",
        proof:"",
        member:"",
        address:"",
        room:"",
        check:"",
        image:"",
        checkO:""
    })
    const {name,phone,Aadhaar,PanCard,Driving,member,address,room,check,image,checkO}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/customer/${id}`,user);
        history("/customer");
    }
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        let result=await axios.get(`http://localhost:4000/customer/${id}`);
        setUser(result.data);
    }
  return (
    <div style={{backgroundImage:"url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
    <Link to="/customer"style={{height:"auto",marginLeft:"-10px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
    
    <div id="addCust">
        <h1 style={{color:"white",marginLeft:"20px"}}>Edit Customer Details</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <table style={{color:"white"}}>
                <tr>
                    <td >
                        Name :<input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                    <td>
                        Mobile :<input type="number" name='phone'  value={phone} placeholder="Mobile no." required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                </tr>
                <tr>
                    <td >
                        Id Proof :<select onChange={e=>onValChange(e)} name="proof" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Aadhaar}>Aadhaar</option>
                                        <option value={PanCard}>Pan Card</option>
                                        <option value={Driving}>Driving License</option>
                                        
                                    </select>
                     </td>
                    <td>
                        Members :<input type="number" name='member'  value={member} placeholder="Members" required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                </tr>
                <tr>
                    <td >
                        Address :<input type="text" name='address'  value={address} placeholder="Address" required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                    <td>
                        Room No.:<input type="number" name='room'  value={room} placeholder="Room No." required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                </tr>
                <tr>
                    <td >
                        Check In :<input type="date" name='check'  value={check}  required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                    <td >
                    Check Out :<input type="date" name='checkO'  value={checkO}  required onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                         Add URL :<input type="text" name='image'  value={image} onChange={e=>onValChange(e)}class="form-control "/>
                    </td>
                </tr>
                <tr >
                    <td colSpan={2}>
                    <button className='btn btn-success form-control' > Update</button>
                    </td>
                </tr>
            </table>
            
        </form>

    </div>
</div>
  )
}
