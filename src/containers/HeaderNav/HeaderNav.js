import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="md">
            <Navbar.Brand href="/">
                <h1 id="logo">
                    <img 
                        alt="logo" 
                        src="https://talkbitz.com/wp-content/uploads/2020/04/Best-Free-Online-Logo-Maker-Sites.png"
                    />
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
          
                <NavDropdown title="Areas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/kitchen">Kitchen</NavDropdown.Item>
                    <NavDropdown.Item href="/guestroom">Guest Room</NavDropdown.Item>
                    <NavDropdown.Item href="/rooftopdeck">Rooftop Deck</NavDropdown.Item>
                    
                    
                </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderNav