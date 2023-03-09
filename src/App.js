import './App.css';
import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import LastLayer from './sections/footer/LastLayer';
import Portfolio from './sections/portfolio/Portfolio';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Modal from './components/Modal';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect} from 'react'

function App() {

  const {themeState} = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if(siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion])

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <LastLayer/>
      <Modal/>
      <Theme/>
     { showFloatingNav && <FloatingNav/> }
    </main>
  );
}

export default App;
