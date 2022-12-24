import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AllUsers() {

    let navigate = useNavigate();

    let [users,setUsers] = useState([]);

    useEffect(() =>{
        getData();
        // axios.get(`https://6394510c86829c49e81935c3.mockapi.io/users`)
        // .then((res) => {setUsers(res?.data)})
        // .catch((err) => {console.log(err)})
    },[])
    
    let getData = () => {
        axios.get(`https://6394510c86829c49e81935c3.mockapi.io/users`)
        .then((res) => {setUsers(res?.data)})
        .catch((err) => {console.log(err)})
    }

    let handleDelete = async(id) => {
        await axios.delete(`https://6394510c86829c49e81935c3.mockapi.io/users/${id}`)
        .then((res) => {if(res.data){getData()}})
        .catch((err) => {console.log(err)})
    }

  return <div className="container-fluid">
    <h1>All Users</h1>

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((e) => {
                    return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.dob}</td>
                        <td>
                            <Button variant='primary' onClick={() => navigate(`/add-users/${e.id}`)}><i className="fas fa-pen-to-square"></i> Edit </Button>
                            &nbsp;&nbsp;
                            <Button variant='danger' onClick={() => handleDelete(e.id)}><i className="fas fa-trash"></i> Delete </Button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </Table>
  </div>
}

export default AllUsers
