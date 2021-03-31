import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../Context/GlobalState'
import { useHistory } from 'react-router-dom';


function EditUser(route){
  let history = useHistory();

  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser ] = useState({
    id: null,
    fullName: "",
    email: "",  
    phone: "",
    address: "",
    gender: "",
    action: ""
  });
  const [gender] = useState();

  const cuerrentUserId = route.match.params.id;

  useEffect(() => {
    const userId = cuerrentUserId;
    const selectedUser = users.find((user) => user.id === parseInt(userId));
    setSelectedUser(selectedUser)
  }, [cuerrentUserId, users])


  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser)
    history.push('/');
  }

  const handleOnChange = (userKey, newValue) =>
  setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
  return <div>Invalid User ID.</div>;
  }
  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
}
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Enter Name" className="form-control form-control-lg" name="fullName" value={selectedUser.fullName} onChange={(e) => handleOnChange("fullName", e.target.value)} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control form-control-lg" placeholder="Enter Your E-mail" name="email" value={selectedUser.email} onchange={(e) => handleOnChange("email", e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={selectedUser.phone} onChange={(e) => handleOnChange("phone", e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Address" name="address" value={selectedUser.address} onChange={(e) => handleOnChange("address", e.target.value)} />
          </div>
          <div className="form-group">
          <select value={selectedUser.gender} className="form-control form-control-lg" onChange={(e) => handleOnChange("gender", e.target.value)}> 
            <option selected>select</option>
            <option name="male"> Male</option>
            <option name="female">Female</option>
            <option name="female">Other</option>
          </select>
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;