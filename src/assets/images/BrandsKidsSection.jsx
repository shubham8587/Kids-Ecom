import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

 
const offers = [
  {
    id: 1,
    image: "http://localhost:3000/images/brand1.webp",
  },
  {
    id: 2,
 image: "http://localhost:3000/images/brand2.webp",
  },
  {
    id: 3,
      image: "http://localhost:3000/images/brand1.webp",
  },
  {
    id: 4,
      image: "http://localhost:3000/images/brand2.webp",
  },
    {
    id: 5,
       image: "http://localhost:3000/images/brand1.webp",
  },
    {
    id: 6,
      image: "http://localhost:3000/images/brand2.webp",
  },
  
];

function BrandsKidsSection() {
  return (
    <section className="offer-slider-section py-5">
      <Container>
    <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 title_bg">
  <div>

    <h2 className="section-title mt-2 mb-2">
     Brands You Love
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
        <Carousel
          indicators={false}
          interval={3000}
          nextIcon={
            <div className="custom-arrow">
              <FaChevronRight />
            </div>
          }
          prevIcon={
            <div className="custom-arrow">
              <FaChevronLeft />
            </div>
          }
        >
          {[0, 2].map((start) => (
            <Carousel.Item key={start}>
              <Row className="g-4">

                {offers.slice(start, start + 3).map((item) => (
                  <Col lg={4} key={item.id}>
                    <div className="offer-card">

                      <img
                        src={item.image}
                        alt=""
                        className="img-fluid"
                      />

                    </div>
                  </Col>
                ))}

              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

      </Container>
    </section>
  );
}

export default BrandsKidsSection;