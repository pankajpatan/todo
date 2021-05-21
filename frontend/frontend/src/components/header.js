import {useState,useEffect} from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header(props) {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          setIsAuth(true);
        }
      }, []);



    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Todo</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
          
                        <Nav className="ml-auto">

                            {/* LinkContainer to='/'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Todo</Nav.Link>
                            </LinkContainer>< */}

                            {isAuth ? (
                                 <LinkContainer to='/logout'>
                                 <Nav.Link><i className="fas fa-user"  ></i>Logout</Nav.Link>
                             </LinkContainer>
                                   
                             
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header