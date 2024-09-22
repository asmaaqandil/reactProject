
import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import program4 from '../../assets/program4.jfif'
import program5 from '../../assets/program5.jpg'
import program6 from '../../assets/program6.jpg'

const Programs = () => {
  return (
    <div className='programs' id='programs' >
    <div className='program'>
        <img src={program1} alt=''/>
        <div className='caption'>
            <h2>learn HTML</h2>
            <p>we can help  you to  become <br/> advanced in HTML</p>

        </div>

    </div>
    <div className='program'>
        <img src={program2} alt=''/>
        <div className='caption'>
            <h2>learn CSS</h2>
            <p>we can help  you to become  <br/>advanced in CSS</p>
            
        </div>

    </div>
    <div className='program'>
        <img src={program3} alt=''/>
        <div className='caption'>
            <h2>learn Javascript</h2>
            <p>we can help you to become  <br/>advanced in Javascript</p>
            
        </div>

    </div>
    <div className='program'>
        <img src={program4} alt=''/>
        <div className='caption'>
            <h2>learn Python</h2>
            <p>we can help you to become  <br/>advanced in Python</p>
            
        </div>

    </div>
    <div className='program'>
        <img src={program5} alt=''/>
        <div className='caption'>
            <h2>learn C++</h2>
            <p>we can help you to become  <br/>advanced in C++</p>
            
        </div>

    </div>
    <div className='program'>
        <img src={program6} alt=''/>
        <div className='caption'>
            <h2>learn Dart</h2>
            <p>we can help you to become  <br/>advanced in Dart</p>
            
        </div>

    </div>
  
  


      
    </div>

  )
}

export default Programs
