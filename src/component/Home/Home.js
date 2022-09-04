import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css'
const Home = () => {

    const [volunteer, setVolunteer] = useState([])
    const [filter, setFilter] = useState()

    useEffect(() => {
        fetch('https://tranquil-bastion-15510.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setVolunteer(data))

    }, [filter])

    const handleSearch = () => {
        fetch(`https://tranquil-bastion-15510.herokuapp.com/tasks?search=${filter}`)
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }
    return (
        <>
            <div className="top-section">
                <div className="bg-color">
                    <Header />
                    <div className="hero-section">
                        <h3>I grow by helping people in need.</h3>
                        <input type="search" name="search" placeholder='Search...' onBlur={(e) => setFilter(e.target.value)} />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        volunteer.map(activity => <div key={activity.id} className='col-10 col-sm-10 col-md-4 col-lg-3 activity'>
                            <Link to={`/volunteeraccount/${activity.taskId}`}> <img src={activity.img} alt={activity.title} />
                                <p> {activity.title}</p></Link>
                        </div>)
                    }
                </div >
            </div >

        </>
    );
};

export default Home;