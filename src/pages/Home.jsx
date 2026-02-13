import { Container, Row } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <Container id="features" className="my-5 py-5">
        <h2 className="text-center fw-bold mb-5">Built for Modern Teams</h2>
        <Row>
          <CardComponent 
            title="Fast Execution" 
            description="Our tools are optimized for speed and reliability." 
            icon="⚡" 
          />
          <CardComponent 
            title="Secure Data" 
            description="Enterprise-grade security for your startup." 
            icon="🛡️" 
          />
          <CardComponent 
            title="Cloud Ready" 
            description="Deploy anywhere in the world with one click." 
            icon="☁️" 
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Home;