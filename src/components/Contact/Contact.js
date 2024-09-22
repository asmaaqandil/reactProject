import React from 'react'
import './Contact.css'
import program16 from '../../assets/program16.png'
import program17 from '../../assets/program17.png'
import program18 from '../../assets/program18.png'
import program19 from '../../assets/program19.png'
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "548edae3-0de1-4292-8c39-2ec5be3987e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' id='contact'>
     <div className='contact-col'>
        <h3> send us a message <img src={program16} alt=''/></h3>
        <p>Effective communication with clients 
            involves<br/> active listening, clarity, empathy responses,<br/> and personalized solutions 
            to build trust</p>
            <ul>
              <li><img src={program17} alt=''/>@frtdjgkk.com</li>  
              <li><img src={program18} alt=''/> +2876576544</li>  
              <li> <img src={program19} alt=''/>contact 33stret</li>  
            </ul>
     </div> 
     <div className='contact-col'>
      <form onSubmit={onSubmit}>
        <label>your name</label>
        <input type='text' name='name' placeholder='inter your name'required></input>
        <label>phone number</label>
        <input type='tel' name='phone' placeholder='inter your mobile number' required></input>
        <label>write your message  here</label>
        <textarea name='message' rows='6' placeholder='inter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>send now</button>
      </form>
      <span>{result}</span>
     </div> 
    </div>
  )
}

export default Contact
