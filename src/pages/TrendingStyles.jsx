import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import trend1 from "../assets/images/trend1.jpg";
import trend2 from "../assets/images/trend2.jpg";
import trend3 from "../assets/images/trend3.jpg";
import trend4 from "../assets/images/trend4.jpg";

const categories = [
  {
    id: 1,
    title: "Shirt Style Edit",
    image: trend1,
    color: "#E3F2FD",
  },
  {
    id: 2,
    title: "Party Wear",
     image: trend2,
    color: "#FCE4EC",
  },
  {
    id: 3,
    title: "Ethnic Wear",
   image: trend3,
    color: "#FFF8E1",
  },
  {
    id: 4,
    title: "Little one Pieces",
    image: trend4,
    color: "#E8F5E9",
  },

];

function TrendingStyles() {
  return (
    <section className="category-section py-5">
      <Container>

                <div className="collection-header">
  <div className="floating-circle circle1"></div>
  <div className="floating-circle circle2"></div>
  <div className="floating-circle circle3"></div>

  <div className="floating-star star1">⭐</div>
  <div className="floating-star star2">🌈</div>
  <div className="floating-star star3">🎈</div>

  <h2>   Trending Styles</h2>
  <button className="view-btn">
    View All →
  </button>
</div>

        <Row className="g-4">
          {categories.map((item) => (
            <Col lg={3} md={6} key={item.id}>
              <Card
                className="category-card border-0 shadow-sm"
                style={{ background: item.color }}
              >
                <div className="overlay"></div>
                <div className="offer_title">
                  UPTO <br></br><span>60 % </span> OFF
                </div>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="category-img category-img-2"
                />

                <Card.Body className="card_title">
                  <h4>{item.title}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TrendingStyles;