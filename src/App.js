import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plan from './Components/Plans/Plan';
import Program from './Components/Programs/Program';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Plan/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
