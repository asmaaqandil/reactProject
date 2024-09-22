

import React, { useRef } from 'react'
import './Review.css'
import program11 from '../../assets/program11.png'
import program10 from '../../assets/program10.png'
import program12 from '../../assets/program12.jfif'
import program13 from '../../assets/program13.jpg'
import program14 from '../../assets/program14.jpg'
import program15 from '../../assets/program15.jpg'

const Review = () => {
 const slider = useRef();
 let tx = 0;

const slideForward = ()=> {
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}


const slideBackward = ()=> {
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
  


}






  return (
    
    <div className='review' id='reviews'>
        <img src={program11} alt='' className='next-btn' onClick={slideForward} />
        <img src={program10} alt='' className='back-btn' onClick={slideBackward}/>
       <div className='slider'>
        <ul ref={slider}>
         <li>
            <div className='slide'>
             <div className='user-info'>
              <img src={program13} alt=''/>
               <div>
                <h3>jone adam </h3>
               </div>
               
             </div>
             <p>it was amazing experiance <br/> i was
                 learning all of things <br/> from this place like,
                  html,css, <br/>javascript and more of languages </p>
            </div>
        </li>
         <li>
            <div className='slide'>
             <div className='user-info'>
              <img src={program14} alt=''/>
               <div>
                <h3>sara jone </h3>
               </div>
               
             </div>
             <p>it was amazing experiance <br/> i was
                 learning all of things <br/> from this place like,
                  html,css, <br/>javascript and more of languages </p>
            </div>
        </li>
         <li>
            <div className='slide'>
             <div className='user-info'>
              <img src={program15} alt=''/>
               <div>
                <h3>steve adam </h3>
               </div>
               
             </div>
             <p>it was amazing experiance <br/> i was
                 learning all of things <br/> from this place like,
                  html,css, <br/>javascript and more of languages </p>
            </div>
        </li>
         <li>
            <div className='slide'>
             <div className='user-info'>
              <img src={program12} alt=''/>
               <div>
                <h3>sozy jone </h3>
               </div>
               
             </div>
             <p>it was amazing experiance <br/> i was
                 learning all of things <br/> from this place like,
                  html,css, <br/>javascript and more of languages </p>
            </div>
        </li>
        </ul>

       </div>
    </div>
  )
}

export default Review
