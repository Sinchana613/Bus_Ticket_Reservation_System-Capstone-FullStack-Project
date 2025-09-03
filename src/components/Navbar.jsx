import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";

export default function AppNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: "#3e2723", // dark espresso brown
        boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#fdf6e3", fontWeight: "700", fontSize: "1.4rem" }}
        >
          Travel Ease
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">{/* left-side links if needed */}</Nav>

          <Nav>
            {!token && (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline-light"
                  id="login-register-dropdown"
                  style={{
                    borderColor: "#fdf6e3",
                    color: "#fdf6e3",
                  }}
                >
                  Login / Register
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    backgroundColor: "#4e342e",
                    color: "#fdf6e3",
                  }}
                >
                  <Dropdown.Item
                    onClick={() => navigate("/login")}
                    style={{ color: "#fdf6e3" }}
                  >
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => navigate("/register")}
                    style={{ color: "#fdf6e3" }}
                  >
                    Register
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            {token && (
              <Nav.Link as={Link} to="/trips" style={{ color: "#fdf6e3" }}>
                Buses
              </Nav.Link>
            )}

            {role === "USER" && (
              <Nav.Link as={Link} to="/user" style={{ color: "#fdf6e3" }}>
                My Bookings
              </Nav.Link>
            )}
            {role === "ADMIN" && (
              <Nav.Link as={Link} to="/admin" style={{ color: "#fdf6e3" }}>
                Admin
              </Nav.Link>
            )}

            {token && (
              <Button
                size="sm"
                className="ms-2"
                style={{
                  border: "1px solid #fdf6e3",
                  backgroundColor: "transparent",
                  color: "#fdf6e3",
                }}
                onClick={logout}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
