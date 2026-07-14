import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import brand1 from "../assets/images/brand1.webp";
import brand2 from "../assets/images/brand2.webp";

 
const offers = [
  {
    id: 1,
    image: brand1,
  },
  {
    id: 2,
 image: brand2,
  },
  {
    id: 3,
     image: brand1,
  },
  {
    id: 4,
   image: brand2,
  },
    {
    id: 5,
   image: brand1,
  },
    {
    id: 6,
 image: brand2,
  },
  
];

function BrandsKidsSection() {
  return (
    <section className="offer-slider-section py-5">
      <Container>

                        <div className="collection-header">
  <div className="floating-circle circle1"></div>
  <div className="floating-circle circle2"></div>
  <div className="floating-circle circle3"></div>

  <div className="floating-star star1">⭐</div>
  <div className="floating-star star2">🌈</div>
  <div className="floating-star star3">🎈</div>

  <h2>   Brands You Love</h2>
  <button className="view-btn">
    View All →
  </button>
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