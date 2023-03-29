import {
    Button,
    Modal,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    ModalTitle, ModalBody, FormGroup, FormLabel, FormText, ModalHeader, FormCheck,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo 3.png'
import {useState} from "react";
import ModalContext from "react-bootstrap/ModalContext";
import * as PropTypes from "prop-types";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBAccordion, MDBCol, MDBCardImage
} from 'mdb-react-ui-kit';

function ModalContainer(props) {
    return null;
}

ModalContainer.propTypes = {children: PropTypes.node};

export function NavbarMenu() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <>
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

                    </div>
                </Button>

>
                <Nav className='btn btn-sm align-middle' >

                    <div unline="true"
                         type="text"
                         className="me-sm-2"
                         placeholder="Search"
                         aria-label="Search">

                        <Button className="bi bi-cart" type='button'
                                onClick={handleShow}
                                variant="outline-warning"
                                data-dismiss='modal'
                                aria-label='Close'>
                            <span aria-hidden='true'>Enter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>

                            <span className="bi bi-cart"></span>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className='container-fluid'>
                                </div>
                            </div>

                        </Button>

                </div>
            </Nav>
            </Container>
        </Navbar>

            <Modal show={show} onHide={handleClose } aria-labelledby="ModalHeader" >
        <MDBContainer
            data-toggle="collapse"
                      data-target="#target"
                      justifyActive={justifyActive}
                      onHide={handleJustifyClick}
                      className="text-light bg-dark">

        <MDBTabs pills justify className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol  col='10'  md='6' className="d-none d-md-block ">
                <MDBCardImage src='https://phonoteka.org/uploads/posts/2021-07/1625669703_9-phonoteka-org-p-chernoe-zoloto-art-krasivo-10.jpg'
                              style={{width: '185px'}}
                              alt="Sample photo" className="rounded-pill" fluid/>
            </MDBCol>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='link-dark shadow-1-strong' outline color='warning'>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
            ◾
                    <MDBTabsItem>
                        <MDBTabsLink  onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='link-dark shadow-1-strong' outline color='warning'>
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>

                        <div className="text-center mb-3">
                            <p>Sign in with:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm"/>
                                </MDBBtn>
                            </div>

                            <p className="text-center mt-3">or:</p>
                        </div>

                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100 me-1" color='outline-warning'>Sign in</MDBBtn>
                        <p className="text-center" >Not a member? <a href="#!">Register </a></p>

                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>

                        <div className="text-center mb-3">
                            <p>Sign un with:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm"/>
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm"/>
                                </MDBBtn>
                            </div>

                            <p className="text-center mt-3">or:</p>
                        </div>

                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                        <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                        </div>

                        <MDBBtn className="mb-4 w-100 me-1" color='outline-warning'>Sign up</MDBBtn>

                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </Modal>



        </>
    )
}