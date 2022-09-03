import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css'
const Home = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('https://tranquil-bastion-15510.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    // console.log(volunteer);
    return (
        <>
            <div className="top-section">
                <div className="bg-color">
                    <Header />
                    <div className="hero-section">
                        <h3>I grow by helping people in need.</h3>
                        <input type="search" name="search" placeholder='Search...' />
                        <button>Search</button>
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