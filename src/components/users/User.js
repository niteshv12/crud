import React, { useState, useEffect, loadUser } from "react";
import { Link, useParams } from "react-router-dom";


function  User() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",  
    phone: "",
    status: "",
    address: "",
    gender: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const [ setValues, values] = useState();

      const handleOnChange = e => {
        const { fullName, value } = e.target;
        setValues({...values, 
        [fullName]: value
      });
      };
  
  return (
    <div className="container py-4">
    {/* {<Link className="btn btn-primary" to="/">
      back to Home
    </Link>} */}
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.fullName}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">status: {user.status}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">website: {user.gender}</li>
      </ul>
    </div>
  );
};

export default User;