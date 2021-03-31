import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useForm } from "react-hook-form";



function AddUser() {
  let history = useHistory();
  const { addUser, users } = useContext(GlobalContext);

  const [fullName, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [phone, setPhone ] = useState('');
  const [address, setAddress ] = useState('');
  const [gender, setGender ] = useState('');
  const [action, setAction ] = useState('');
  
      const onSubmit = () => {
          const newUser = {
              id: users.length + 1,
              fullName:fullName,
              email:email,
              phone:phone,
              address:address,
              gender:gender,
              action:action
          }
          addUser(newUser)
          history.push('/');
      }
      const onChange = (e) => {
        let name = e.target.name;
        if(name==="fullName"){
          setName(e.target.value)
        }else if(name==="email"){
          setEmail(e.target.value)
        }else if(name==="phone"){
          setPhone(e.target.value)
        }else if(name==="address"){
          setAddress(e.target.value)
        }else if(name==="gender"){
          setGender(e.target.value)
        }else if(name==="action"){
          setAction(e.target.value)
        }
      }

      const { register, handleSubmit, watch, errors } = useForm();
      console.log(errors);
     
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <input type="text" className="form-control form-control-lg" ref={register({required: true})} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" name="fullName" value={fullName} onChange={onChange} />
            <small className="form-text text-danger text-left">{errors.fullName ? "This field is required" : ""}</small>
          </div>
          <div className="form-group">
            <input type="email" className="form-control form-control-lg" ref={register({required: true})} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your E-mail" name="email" value={email} onChange={onChange} />
            <small className="form-text text-danger text-left">{errors.email ? "This field is required" : ""}</small>
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" ref={register({required: true})} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={onChange} />
            <small className="form-text text-danger text-left">{errors.phone ? "This field is required" : ""}</small>
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" ref={register({required: true})} onChange={(e) => setAddress(e.target.value)} placeholder="Address" name="address" value={address} onChange={onChange} />
            <small className="form-text text-danger text-left">{errors.address ? "This field is required" : ""}</small>
          </div>
          <div className="form-group">
          <select value={gender} className="form-control form-control-lg" value={gender}  ref={register({required: true})} onChange={(e) => setGender(e.target.value)}> 
          <small className="form-text text-danger text-left">{errors.gender ? "This field is required" : ""}</small>
                  <option selected>select</option>
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
                  <option name="female">Others</option>
          </select>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;