import React, { useContext, useEffect, useState } from 'react';
import logo from '../../Group 1329.png'
import './VolunteerAccount.css'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useNavigate } from "react-router-dom";

const VolunteerAccount = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('https://tranquil-bastion-15510.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => {
                const thisActivity = data.find(key => key.taskId === Number(id))
                setVolunteer(thisActivity)
            })
    }, [id])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const userInfo = { ...loggedInUser, ...volunteer, ...data }
        console.log(userInfo);
        fetch('https://tranquil-bastion-15510.herokuapp.com/volunteer', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
            })
        navigate('/eventTask', { replace: true })

    };
    return (
        <div className='volunteer'>
            <img src={logo} alt="LOGO" className='logo' />
            <form onSubmit={handleSubmit(onSubmit)} className='volunteerForm'>
                <h2>Register as a Volunteer</h2>
                <input {...register("fullName", { required: true })} placeholder='Full Name' />
                {errors.fullName && <span>Name is required</span>}
                <input {...register("userEmail", { required: true })} placeholder='Username orEmail' />
                {errors.userEmail && <span>This field is required</span>}
                <input {...register("date", { required: true })} placeholder='Date' type='date' />
                {errors.date && <span>date is required</span>}
                <input {...register("description", { required: true })} placeholder='Description' />
                {errors.description && <span>This field is required</span>}
                <input {...register("activityname", { required: true })} placeholder='Organize books at the library.' />
                {errors.activityname && <span>This field is required</span>}
                <input type="submit" value='Submit' className='btn btn-info text-white' />
            </form>
        </div>
    );
};

export default VolunteerAccount;