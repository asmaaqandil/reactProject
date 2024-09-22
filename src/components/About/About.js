import React from 'react'
import './About.css'
import program7 from '../../assets/program7.jpg'
const About = () => {
  return (
    <div className='about' >
      <div className='about-left'>
        <img src={program7} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>About Coures</h3>
        <p>Comprehensive programming course <br/> offering 
            hands-on training in coding <br/> fundamentals,
            algorithms, and software <br/> development.
            Covers languages like Python<br/>JavaScript, and C++.
             Perfect for beginners <br/> and advanced learners
             seeking practical skills</p>
             <button className='btn' >contact us</button>
            
      
      </div>
    
     
    </div>
  )
}

export default About
