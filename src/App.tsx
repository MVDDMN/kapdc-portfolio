import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
