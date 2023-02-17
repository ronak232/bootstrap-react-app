import { BiChevronDown, BiSearch } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/navbar.css";
// import { NavItem } from "reactstrap";

function WizNavbar() {
  return (
    <Navbar className="navbar-content" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="col-3">
          <img
            className="logoimage"
            src="https://wizixo.webestica.com/assets/images/logo.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              Demos
              <BiChevronDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Blogs
              <BiChevronDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Pages
              <BiChevronDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Portfolio
              <BiChevronDown />
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        <Nav.Item>
          <BiSearch />
        </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WizNavbar;
