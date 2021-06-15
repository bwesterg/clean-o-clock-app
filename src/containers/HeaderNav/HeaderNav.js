import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './HeaderNav.css';

const HeaderNav = ({ areas }) => {

    const createLinkText = areaName => {
        const linkName = areaName.toLowerCase().split(' ').join('-');
        return `/areas/${linkName}`;
    }

    const createNavDropdownItem = area => {
        const href = createLinkText(area.name);
        return (
            <NavDropdown.Item key= { area.id } href={ href } >
                { area.name }
            </NavDropdown.Item>
        );
    }

    const displayAreaLinks = () => {
        return areas.map(createNavDropdownItem);
    }

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
                    <NavDropdown title="Areas" id="basic-nav-dropdown">
                        { displayAreaLinks() }
                </NavDropdown>
                <Nav.Link href="/checklists">Checklists</Nav.Link>
                <Nav.Link href="/supplies">Supplies</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderNav