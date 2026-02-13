import { Card, Col } from 'react-bootstrap';

const CardComponent = ({ title, description, icon }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 border-0 shadow-sm text-center p-4">
        <div className="mb-3" style={{ fontSize: '2.5rem' }}>{icon}</div>
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardComponent;