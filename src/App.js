import React, { useState } from 'react'
import './App.css';
import './components/w3.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import cars from './data/data';
import peoples from './data/data2';
import CarPost from './components/CarPost';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  const [seletedCar, setSeletedCar] = useState(null);
  function onCarOpenClick(car) {
    setSeletedCar(car);
  }

  function onCarCloseClick() {
    setSeletedCar(null);
  }
  const carItems = cars.filter((car) => {
    return car.title;
  }).map((car, index) => {
    return <Projects key={index} car={car} onCarClick={onCarOpenClick} />;
  });

  let carPost = null;
  if (!!seletedCar) {
    carPost = <CarPost car={seletedCar} onBgclick={onCarCloseClick} />
  }

  // people
  const peopleDT = peoples.filter((people) => {
    return people.name;
  }).map((people, index) => {
    return <About key={index} people={people} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="w3-container w3-padding-32" id="Projects">
        <h3 className="title">Projects</h3>
        <div className="car-items">{carItems}</div>
      </div>

      <div className="w3-container w3-padding-32" id="About">
        <h3 className="title" id="title3">About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br />
        {peopleDT}
      </div>
      {carPost}

      <div className="w3-container w3-padding-32" id="Contact">
        <Contact />
      </div>
      <div class="w3-container">
        <img class="w3-image" src="/img/RL.jpg" alt="Architecture" width="1500" height="800" />
      </div>

      <footer class="w3-center w3-black w3-padding-16">
        <p>Powered by <a href="https://www.youtube.com/watch?v=psXuH3-l8zA" title="W3.CSS" target="_blank"
          class="w3-hover-text-green">RL Studio</a></p>
      </footer>


    </div>

  );
}

export default App;
