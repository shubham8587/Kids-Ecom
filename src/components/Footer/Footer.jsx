import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="kids-footer">

      {/* Newsletter */}
      <div className="newsletter-area">
        <Container>
          <Row className="align-items-center">

            <Col lg={6}>
              <h3>🎁 Join Our Newsletter</h3>
              <p>
                Get exclusive offers, new arrivals & special discounts.
              </p>
            </Col>

            <Col lg={6}>
              <Form className="newsletter-form">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />

                <Button>
                  Subscribe
                </Button>
              </Form>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Container className="py-5">

        <Row className="gy-4">

          {/* About */}
          <Col lg={4} md={6}>

            <h2 className="footer-logo">
             Kids<span>Wear</span>
            </h2>

            <p className="footer-text">
              Premium kids wear designed with comfort,
              style and happiness in mind. Discover
              adorable outfits for every little adventure.
            </p>

            <div className="social-icons">

              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaTwitter />
              </a>

              <a href="/">
                <FaYoutube />
              </a>

            </div>

          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5>Quick Links</h5>

            <ul className="footer-links">
              <li><a href="/">Shop</a></li>
              <li><a href="/">New Arrivals</a></li>
              <li><a href="/">Offers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>

          </Col>

          {/* Categories */}
          <Col lg={2} md={6}>
            <h5>Categories</h5>

            <ul className="footer-links">
              <li><a href="/">Boys Wear</a></li>
              <li><a href="/">Girls Wear</a></li>
              <li><a href="/">Baby Wear</a></li>
              <li><a href="/">Footwear</a></li>
              <li><a href="/">Accessories</a></li>
            </ul>

          </Col>

          {/* Contact */}
          <Col lg={4} md={6}>

            <h5>Contact Us</h5>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>123 Fashion Street, New York</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+1 983 654 4440</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>support@tinytrends.com</span>
            </div>

            <div className="payment-icons mt-4">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcAmex />
            </div>

          </Col>

        </Row>

      </Container>

      {/* Bottom */}
      <div className="footer-bottom">
        <Container className="d-flex justify-content-between flex-wrap">

          <p className="mb-0">
            © 2025 KidsWear. All Rights Reserved.
          </p>

          <div>
            <a href="/">Privacy Policy</a>

            <span className="mx-2">|</span>

            <a href="/">Terms & Conditions</a>
          </div>

        </Container>
      </div>

    </footer>
  );
}

export default Footer;