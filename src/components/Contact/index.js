import './index.scss';
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {

    const [letterClass, setterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
    const timeoutId = setTimeout(() => {
        setterClass('text-animate-hover');
    }, 4000);

    // Cleanup function to clear the timeout if the component unmounts
    // or if the effect is re-run before the timeout completes 
    //avoid destroy function Runtime Error
    return () => clearTimeout(timeoutId); // proper cleanup
    }, []);

      const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('contact_service', 'template_mheirrs', form.current, {
        publicKey: 'QUz2RXLSw8mPCJGqs',
      })
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

   return (
   <>
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Contact me".split("")]}
              idx={15}
            />
          </h1>
          <p>
            Thanks for taking the time to view my work!
          </p>
          <p>
            Whether you have a question about my projects,
            want to discuss collaborations, or simply want to say hello,
          </p>
          <p>
            Please don't hesitate to reach out through the contact form or LinkedIn.
          </p>
          <div className="contact-form">
            { <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> }
          </div>
        </div>
      </div> 
      <Loader type="pacman" />
    </>
   )
}

export default Contact;