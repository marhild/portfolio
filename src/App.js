import './App.css';
import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import LastLayer from './sections/footer/LastLayer';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';
//import FloatingNav from './sections/floating-nav/Floating-nav';
import FirstLayer from './sections/firstLayer/FirstLayer';
import Modal from './components/Modal';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';

function App() {
  const {themeState} = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar/>
      <FirstLayer/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <LastLayer/>
      <Modal/>
      <Theme/>
      {/*<FloatingNav/>*/}
    </main>
  );
}

export default App;
