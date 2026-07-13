import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import boy from "../assets/images/boy.png";
import kids1 from "../assets/images/kids1.avif";
import newborn from "../assets/images/newborn.png";
import shoes from "../assets/images/shoes.png";
import winter from "../assets/images/winter.png";


const categories = [
  {
    id: 1,
    title: "Boys Collection",
    image: boy,
    color: "#E3F2FD",
  },
  {
    id: 2,
    title: "Girls Collection",
  image: kids1,
    color: "#FCE4EC",
  },
  {
    id: 3,
    title: "Newborn",
     image: newborn,
    color: "#FFF8E1",
  },
  {
    id: 4,
    title: "Shoes",
  image: shoes,
    color: "#E8F5E9",
  },
  {
    id: 5,
    title: "Accessories",
  image: kids1,
    color: "#F3E5F5",
  },
  {
    id: 6,
    title: "Winter Wear",
   image: winter,
    color: "#E0F7FA",
  },
];

function ShopCategories() {
  return (
    <section className="category-section py-5">
      <Container>
    <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 title_bg">
  <div>

    <h2 className="section-title mt-2 mb-2">
      Explore Kids Collections
    </h2>
  </div>

  <div className="mt-3 mt-md-0">
    <Button
      variant="outline-dark"
      className="rounded-pill px-4 py-2 fw-semibold"
    >
      View All →
    </Button>
  </div>
</div>

        <Row className="g-4">
          {categories.map((item) => (
            <Col lg={2} md={4} key={item.id}>
              <Card
                className="category-card border-0 shadow-sm"
                style={{ background: item.color }}
              >
                <div className="overlay"></div>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="category-img"
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

export default ShopCategories;