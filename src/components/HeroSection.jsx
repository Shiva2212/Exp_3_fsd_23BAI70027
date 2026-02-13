import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="bg-light vh-100 d-flex align-items-center pt-5">
      <Container className="text-center">
        <h1 className="display-3 fw-bold">Scale Your Idea to <span className="text-primary">Infinity</span></h1>
        <p className="lead text-muted my-4">
          The all-in-one platform for modern startups to manage projects and team collaboration.
        </p>
        <Button variant="primary" size="large" className="px-5 py-3 shadow">Get Started for Free</Button>
      </Container>
    </div>
  );
};
export default HeroSection;