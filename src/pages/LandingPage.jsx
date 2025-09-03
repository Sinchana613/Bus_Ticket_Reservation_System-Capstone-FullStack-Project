import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  FaBus,
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Container
        fluid
        className="landing-hero text-center text-white d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="hero-title fw-bold mb-3">Welcome to TravelEase</h1>
        <p className="hero-subtitle mb-4">
          Comfortable, Reliable & Secure Bus Ticketing Made Simple
        </p>
        <Button
          variant="warning"
          size="lg"
          className="px-5 py-3 fw-bold shadow hero-btn"
          onClick={() => navigate("/trips")}
        >
          Book Your Ride
        </Button>
      </Container>

      {/* Features Section */}
      <Container className="my-5 text-center">
        <h2 className="mb-4 fw-semibold section-title">
          Why Travel with TravelEase?
        </h2>
        <Row>
          {[
            {
              icon: <FaBus size={45} className="text-primary mb-3" />,
              title: "Smart Booking",
              desc: "Real-time schedules & instant seat confirmation.",
            },
            {
              icon: <FaLock size={45} className="text-success mb-3" />,
              title: "Safe Payments",
              desc: "Secure transactions with trusted gateways.",
            },
            {
              icon: <FaMoneyBillWave size={45} className="text-warning mb-3" />,
              title: "Flexible Refunds",
              desc: "Easy cancellations & quick refund processing.",
            },
            {
              icon: <FaHeadset size={45} className="text-danger mb-3" />,
              title: "24/7 Assistance",
              desc: "Round-the-clock customer care for peace of mind.",
            },
          ].map((feature, i) => (
            <Col md={3} sm={6} className="mb-3" key={i}>
              <Card className="p-4 shadow-sm h-100 feature-card">
                {feature.icon}
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About Us Section */}
      <Container className="my-5 text-center">
        <h2 className="fw-semibold mb-3 section-title">About TravelEase</h2>
        <p className="fs-5 about-text">
          <strong>TravelEase</strong> is your trusted travel companion, bringing
          you a hassle-free bus booking experience across India. From daily
          commutes to long-distance journeys, our platform partners with top
          operators to provide reliable service, affordable pricing, and a
          seamless booking process — all from the comfort of your device.
        </p>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5 text-center">
        <h2 className="fw-semibold mb-4 section-title">What Our Customers Say</h2>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <Card className="p-4 shadow-sm testimonial-card">
              <FaStar className="text-warning mb-2" size={24} />
              <p>
                “Booking my bus tickets is now stress-free. TravelEase is super
                fast and reliable!”
              </p>
              <h6>- Ananya, Bengaluru</h6>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="p-4 shadow-sm testimonial-card">
              <FaStar className="text-warning mb-2" size={24} />
              <p>
                “Loved the secure payment options. I feel safe booking my trips
                here.”
              </p>
              <h6>- Rahul, Mumbai</h6>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="p-4 shadow-sm testimonial-card">
              <FaStar className="text-warning mb-2" size={24} />
              <p>
                “Quick refunds and excellent support. Highly recommended!”
              </p>
              <h6>- Priya, Delhi</h6>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Us Section */}
      <Container className="my-5">
        <h2 className="fw-semibold mb-3 section-title">Contact Us</h2>
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-3 shadow-sm contact-card">
              <h5>
                <FaMapMarkerAlt className="me-2 text-danger" />
                Office Address
              </h5>
              <p>45 MG Road, Bengaluru, Karnataka</p>
              <p>560001</p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-3 shadow-sm contact-card">
              <h5>
                <FaEnvelope className="me-2 text-primary" />
                Reach Us
              </h5>
              <p>Email: support@travelease.com</p>
              <p>
                <FaPhone className="me-2 text-success" /> +91 98765 43210
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center py-4 footer">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
        </p>
        <div>
          <a href="/privacy" className="me-3">
            Privacy Policy
          </a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </>
  );
}
