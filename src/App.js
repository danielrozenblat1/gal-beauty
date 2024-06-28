import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return<>
  <div class="app">
  <NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  </div>
  </>
}

export default App;
