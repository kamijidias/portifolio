import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Portifolio from './Components/Portifolio';
import Testemonials from './Components/Testemonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Services />
      <Portifolio />
      <Testemonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
