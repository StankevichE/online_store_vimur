import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from './Profile-Female-PNG-Image.png'
import logo from './logo 3.png'

export function NavbarMenu() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" >
                    <img src={logo}
                         height="100"
                         width="120"
                         className="d-inline-block align-top"
                         alt="Logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                    <Nav.Link to="/Store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/contacts" as={NavLink}>Contacts</Nav.Link>
                    <NavDropdown title="Additionally" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">History Brand</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">More deets</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cooperation</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form inline="true" className="d-flex p-2 bd-highlight">
                    <FormControl
                        unline="true"
                        type="text"
                        className="me-sm-2"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button variant="outline-warning">Search</Button>
                    <div className="d-flex flex-row-reverse">
                      </div>
                </Form>
>
                <Button
                    style={{ width: "2.5rem", height: "2.5rem", position: "relative" }}
                    variant="outline-warning"
                    className="bi bi-cart"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   className="bi bi-cart" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

                    <span className="bi bi-cart"></span>
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-0-circle" viewBox="0 0 16 16">
                            <path
                                d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                        </svg>


                        <link
                            rel="stylesheet"
                            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                            crossOrigin="anonymous"
                        />
                    </div>
                </Button>

>
                <Navbar.Text className='btn btn-sm align-middle btn-outline-secondary' >
                    <div unline="true"
                         type="text"
                         className="me-sm-2"
                         placeholder="Search"
                         aria-label="Search">
                <img src={avatar}
                     height="20"
                     width="20"
                     position="relative"
                     className="d-flex flex-column"
                     alt="Avatar"
                />
                       <a >Elena Stankevich</a>
                </div>
            </Navbar.Text>

            </Container>
        </Navbar>
    )
}