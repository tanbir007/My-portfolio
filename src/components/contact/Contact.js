import React from 'react';
import './contact.css'
import phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [done,setDone] = useState(false)

    const formRef=useRef()
    const handleSubmitButton = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_0lu7c39', 'template_tpb8v1l', formRef.current, 'user_vxjvXg7uH4NTsgjaMHZHU')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Lets Discuss Your Project
                    </h1>
                    <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +880-1717385968
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              tanbir.1121@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              27/2,payra,Sylhet.
            </div>
          </div>
                </div>
                <div className="c-right">

                    <p className="c-desc">
                        <b>Whats your story, </b>
                        Got an idea? Knock me ASAP before its gone. We are always there for you.Thanks!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmitButton}>
                        <input type="" placeholder="Name" name="user_name"></input>
                        <input type="" placeholder="Subject" name="user_subject"></input>
                        <input type="" placeholder="Email" name="user_Email"></input>
                        <textarea rows="5" placeholder="massege" name=""></textarea>
                        <button type="submit" name="Submit">Submit</button>
                    </form>
                    {done && "thanks"}
                </div>



            </div>
        </div>
    );
};

export default Contact;