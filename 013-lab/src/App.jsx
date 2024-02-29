import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
        <div className="Cards">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>  
    </div>
  );
}

export default App;
