// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { About } from "./components/About/About";
import {Certifications} from "./components/Certifications/Certifications"
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from "./components/Hero/Hero";
//import './vars.css'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
       <About />
       <Experience />
      < Projects /> 
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App