
import styles from './NavBar.module.css';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useAuth.js';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import { isAdmin } from '../../utils/authUtils.js';


export default function NavBar() {

    //const { isAuthenticated, username } = useAuthContext();

    const logout = useLogout();
    const { username, isAuthenticated } = useAuthContext();

    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
            <Container className={styles['container']}>
                <Navbar.Brand as={Link} to={'/'}><img src='/YogaOm.png' width="150" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

                    <Nav variant='underline'>
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/classes'}>Upcoming classes</Nav.Link>

                        {
                            isAuthenticated ?
                                (<NavDropdown className={styles["signin-button"]} id="authenticated-nav" title={<><i className="fa-solid fa-user"></i><span> Welcome {username}</span></>} >
                                    {
                                        isAdmin() && <>
                                            <NavDropdown.Item as={Link} to={'/classes/create'}>Create Classes</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to={'/classes/admin'}>Manage Classes</NavDropdown.Item>
                                            <NavDropdown.Divider />

                                        </>
                                    }

                                    <NavDropdown.Item href="/myclasses">
                                        My Classes
                                    </NavDropdown.Item>
                                    { }

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} onClick={logout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>)
                                :
                                (
                                    <NavDropdown id="guest-nav" title={<><i className="fa-solid fa-user"></i><span> Sign-in</span></>}>
                                        <NavDropdown.Item as={Link} to={'/login'}>Login</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to={'/register'} >
                                            Register
                                        </NavDropdown.Item>

                                    </NavDropdown>
                                )
                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}