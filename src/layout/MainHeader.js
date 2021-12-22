import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainHeader = () => {

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <NavLink className="navbar-brand" to="/">AlbaBnb</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/booking">Booking</NavLink>
                            <NavLink className="nav-link" to="/transport">Transport</NavLink>
                            <NavLink className="nav-link" to="/things-to-do">Things To Do</NavLink>
                            <NavLink className="nav-link" to="/restaurant">Restaurant</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default MainHeader;
