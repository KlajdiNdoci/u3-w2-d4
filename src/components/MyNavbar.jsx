import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function MyNavbar() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Indeed</Navbar.Brand>
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/SavedJobs" && "active"}`} to="/SavedJobs">
              SavedJobs
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
