import React, { useEffect, useState } from 'react';
import logo from '../../Group 1329.png'
import { FiUsers } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const [value, setValue] = React.useState(dayjs(new Date()));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {


    }, [])
    console.log(userInfo)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-bastion-15510.herokuapp.com/addevent', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => setUserInfo(result))
    };
    return (
        <div className='admin-container row'>
            <div className="col-3 col-sm-3 col-md-3 ps-5">
                <Link to='/'><img src={logo} alt="LOGO" className='logo' /></Link>
                <div className="event">
                    <h4><FiUsers />Volunteer register list</h4>
                    <Link to='/admin/addEvent' className='active'><AiOutlinePlus />Add Event</Link>
                </div>
            </div>
            <div className="col-9 col-sm-9 col-md-8">
                <div className="admin-title">
                    <h1>Volunteer register list</h1>
                </div>
                <div className="register-list">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="admin-dashboard">
                            <div className="row">
                                <div className="col-sm-11 col-md-5 addform">
                                    <label htmlFor="title">Event Title</label><br />
                                    <input {...register("title", { required: true })} placeholder='Enter title' />
                                    {errors.title && <span>This field is required</span>}
                                    <br />
                                    <label htmlFor="description">Event Title</label><br />

                                    <input {...register("description", { required: true })} placeholder='Enter title' />
                                    {errors.description && <span>This field is required</span>}


                                </div>
                                <div className="col-sm-11 col-md-5">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                                {...register('date', { required: true })}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Submit" className='submitbtn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;