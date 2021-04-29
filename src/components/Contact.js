import React, { useState } from "react";
import emailjs from 'emailjs-com';
import {
    SERVICE_ID, TEMPLATE_ID, USER_ID
} from '../utils/emailjsconfig'
import mail from '../images/mail.jpg'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(false);

    //function checkValid() {    }


    function handleNameChange(e) {
        setName(e.target.value)

    }
    function handleEmailChange(e) {
        setEmail(e.target.value)

    }
    function handleMessageChange(e) {
        setMessage(e.target.value)

    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((res) => {
                setName("");
                setEmail("");
                setMessage("");
                setStatus(true);
            })
            .catch((err) => {
                console.log(err.text)
            })
    }
    return (
        <>
        <h2 className="section__heading">Contact Me:</h2>
        <form className="contact-form" onSubmit={sendEmail}>
            <fieldset>
                <label>Full Name</label>
                <input type="text" name="from_name" required value={name} onChange={handleNameChange} />
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input type="email" name="reply_to" required value={email} onChange={handleEmailChange} />
            </fieldset>
            <fieldset>
            <label>Message</label>
            <textarea name="message" required value={message} onChange={handleMessageChange} />
            </fieldset>
            <button className={name && email && message ? 'contact-form__submit' : 'contact-form__submit contact-form__submit_disabled'} type="submit" disabled={name && email && message ? '' : true}> Send </button>
            <img className={status ? "email-received":"email-received_hidden"} onClick={()=>setStatus(!status)} src={mail} alt="Success"/>
        </form>
        </>
    )

}
