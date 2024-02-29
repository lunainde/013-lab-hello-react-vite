import "./App.css";
import HeroSection from "./src/components/Navbar.jsx";
import Card1 from "./components/Card1.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";
import Card4 from "./components/Card4.jsx";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

export default App;
