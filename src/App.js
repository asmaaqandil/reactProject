
import Nav from './components/Navbar/Nav';

import React from "react";

 import './index.css'
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Review from './components/Reviews/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

 const App = () => {
  return (
    <div >
   
   <Nav/>
   <Hero/>
   <div className='container'>

    <Title subTitle='Our Programs' title='What We will teach'/>

   <Programs/>
   <About/>
   <Title subTitle='reviews' title='What students sayes about us'/>
   <Review/>
   <Title subTitle='Contact us' title='Get in touch'/>
   <Contact/>
   <Footer/>
   </div>


    </div>
  );
}

export default App;
