import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function Home() {
  
  const { users, removeUser } = useContext(GlobalContext)
  const deleteItem = (id) => {
   
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => removeUser(id)
        },
        {
          label: 'No',
          onClick: () => alert('removeUser(id)')
        }
      ]
    }); 
    
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { users.map((user, index) => {
              return (
                <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.gender}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`users/${user.id}`}>View</Link>
                  <Link class="btn btn-primary mr-2" to={`users/edit/${user.id}`}>Edit</Link>
                  <Link class="btn btn-danger mr-2" onClick={() => deleteItem(user.id)} >Delete</Link>
                  
                </td>
              </tr>
              )})}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;