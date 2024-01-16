import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form=useRef();

    const handleSend = (e) => {
        e.preventDefault();
        alert("You are Succefully enrolled")
        emailjs.sendForm('service_wjlxs05', 'template_ujecipf', form.current, '9tH1UJRDOcLX4IKfV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr/>
        <div>
        <span className="stroke-text">Ready to</span>
        <span>level up</span>
        </div>
        <div>
        <span>your body</span>
        <span className="stroke-text"> with us?</span>
        </div>
     </div>
        <div className="right-j" >
            <form  ref={form}action="" className="email-container" onSubmit={handleSend}>
                <input type="email" name="from_name" placeholder="Enter your Email address"/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div> 
  )
}

export default Join
