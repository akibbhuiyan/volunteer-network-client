import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../Group 1329.png'
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="LOGO" style={{ 'width': '200px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/' className='nav-link'>Donation</Link>
                        <Link to='/eventTask' className='nav-link'>Events</Link>
                        <Link to='/' className='nav-link'>Blog</Link>
                        <Link to='/login' className='nav-link'><Button variant="primary">Register</Button></Link>
                        <Link to='/admin' className='nav-link'><Button variant="dark">Admin</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header