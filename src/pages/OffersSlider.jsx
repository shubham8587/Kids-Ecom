import { Carousel, Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import off from "../assets/images/off.png";

const offers = [
  {
    id: 1,
    image: off,
  },
  {
    id: 2,
     image: off,
  },
  {
    id: 3,
 image: off,
  },
  {
    id: 4,
 image: off,
  },
    {
    id: 5,
    image: off,
  },
    {
    id: 6,
  image: off,
  },
  
];

function OffersSlider() {
  return (
    <section className="offer-slider-section py-5">
      <Container>

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

export default OffersSlider;