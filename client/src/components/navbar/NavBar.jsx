
import styles from './NavBar.module.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
    return (
                  <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container className={styles['container']}>
                    <Navbar.Brand href="#home"><img src='/YogaOm.png' width="150" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav variant='underline'>
                            <Nav.Link  href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                            {/* <NavDropdown className={styles["signin-button"]} id="authenticated-nav" title={<><i className="fa-solid fa-user"></i><span> Welcome username</span></>} >
                                <NavDropdown.Item href="#action/3.1">Create Classes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    View Classes
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        <NavDropdown id="guest-nav" title={<><i className="fa-solid fa-user"></i><span> Sign-in</span></>}>
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Register
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}