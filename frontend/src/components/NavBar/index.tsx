import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

function NavBar({ darkMode }) {
  const { user, signOut } = useAuth();

  return (
    <Navbar
      data-bs-theme={darkMode ? "dark" : "light"}
      fixed="top"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          YAIM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/chat">
              Chat
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} to="/history">
                History
              </Nav.Link>
            ) : null}
            {user ? (
              <>
                <button onClick={signOut}>logout</button>
                <Navbar.Text>Signed in with: {user.email}</Navbar.Text>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
