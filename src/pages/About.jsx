import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 fw-bold">About NexusNode</h1>
          <p className="lead text-muted">Bridging the gap between idea and execution.</p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm p-4">
            <Card.Body>
              <h2 className="h4 mb-3 text-primary">The Developer</h2>
              <p>
                Hi, I'm Shiva! I'm a Full Stack Developer focused on building 
                clean, high-performance applications. I enjoy solving complex 
                problems using modern tools like React and Java.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm p-4">
            <Card.Body>
              <h2 className="h4 mb-3 text-primary">Our Startup</h2>
              <p>
                NexusNode is a tech-driven startup dedicated to providing 
                scalable web solutions. We believe in the power of well-architected 
                code to transform business operations.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;