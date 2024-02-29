import Navbar from './Navbar';

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button>Awesome!</button>
    </div>
  );
}

export default HeroSection;