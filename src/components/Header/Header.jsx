import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Modal,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
    FaChild,
  FaFemale,
  FaStar,
  FaTags,
} from "react-icons/fa";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div
        className="py-2 text-center text-white"
        style={{ background: "#ff6b81", fontSize: "14px" }}
      >
        🎉 Free Shipping on Orders Above ₹999
      </div>

      {/* Header */}
      <Navbar bg="white" expand="lg" className="shadow-sm py-3">
        <Container>

          {/* Logo */}
          <Navbar.Brand className="fw-bold fs-2 text-danger">
            Kids<span className="text-primary">Wear</span>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>

            {/* Menu */}
      <Nav className="mx-auto gap-3 fw-semibold align-items-center">

  <Nav.Link href="#" className="menu-link">
    <FaChild className="menu-icon text-primary me-2" />
    Boys
  </Nav.Link>

  <Nav.Link href="#" className="menu-link">
    <FaFemale className="menu-icon text-danger me-2" />
    Girls
  </Nav.Link>

  <Nav.Link href="#" className="menu-link">
    <FaStar className="menu-icon text-warning me-2" />
    New Arrivals
  </Nav.Link>

  <Nav.Link href="#" className="menu-link">
    <FaTags className="menu-icon text-success me-2" />
    Sale
  </Nav.Link>

</Nav>

            {/* Search */}
      <Form className="search-form">
  <div className="search-box">
    <Form.Control
      type="text"
      placeholder="Search for kids wear..."
      className="search-input"
    />

    <Button className="search-btn">
      <FaSearch />
    </Button>
  </div>
</Form>
            {/* Icons */}
<div className="header-actions">

  {/* Wishlist */}
  <div className="action-item">
    <FaHeart className="action-icon" />
    <span className="action-badge">2</span>
  </div>

  {/* Cart */}
  <div className="action-item">
    <FaShoppingCart className="action-icon" />
    <span className="action-badge">3</span>
  </div>

  {/* Login */}
  <Button
    className="login-btn"
    onClick={() => setShowLogin(true)}
  >
    <FaUser className="me-2" />
    Login
  </Button>

</div>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal
        show={showLogin}
        onHide={() => setShowLogin(false)}
        centered
      >
        <Modal.Body className="p-0">

          <Row className="g-0">

            {/* Left */}
            <Col
              md={5}
              className="text-white d-flex flex-column justify-content-center p-4"
              style={{
                background:
                  "linear-gradient(135deg,#ff6b81,#ffb347)",
              }}
            >
              <h3>Welcome Back 👋</h3>

              <p>
                Login to view orders, wishlist and
                exclusive offers.
              </p>
            </Col>

            {/* Right */}
            <Col md={7} className="p-4">

              <h4 className="mb-4">Login</h4>

              <Form>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button
                  className="w-100 rounded-pill"
                  style={{
                    background: "#ff6b81",
                    border: 0,
                  }}
                >
                  Login
                </Button>

              </Form>

              <div className="text-center mt-3">
                New Customer?{" "}
                <a href="#">Create Account</a>
              </div>

            </Col>

          </Row>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;