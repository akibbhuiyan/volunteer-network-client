import React, { useEffect, useState } from 'react';
import logo from '../../Group 1329.png'
import { FaTrashAlt } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import './Admin.css'
import { Link } from 'react-router-dom';
const Admin = () => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        fetch('https://tranquil-bastion-15510.herokuapp.com/admintask')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])
    const handleDelete = (user) => {
        console.log(user._id);
        fetch(`https://tranquil-bastion-15510.herokuapp.com/admintask/delete?delete=${user._id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='admin-container row'>
            <div className="col-3 col-sm-3 col-md-3 ps-5">
                <Link to='/'><img src={logo} alt="LOGO" className='logo' /></Link>
                <div className="event">
                    <h4 className='active'><FiUsers />Volunteer register list</h4>
                    <Link to='/admin/addEvent'><AiOutlinePlus />Add Event</Link>
                </div>
            </div>
            <div className="col-9 col-sm-9 col-md-8">
                <div className="admin-title">
                    <h1>Volunteer register list</h1>
                </div>
                <div className="register-list">
                    <div className="admin-dashboard">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registating date</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userInfo.map(user => <tr key={user.taskId}>
                                        <td>{user.fullName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.date}</td>
                                        <td>{user.title}</td>
                                        <td onClick={() => handleDelete(user)}><FaTrashAlt /></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;