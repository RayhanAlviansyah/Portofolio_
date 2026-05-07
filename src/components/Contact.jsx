import React from 'react';
import './Contact.css';
import ScrollReveal from './ScrollReveal';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_66gapun', 'template_wg7497m', form.current, 'WB_PIKreunliRp4b3')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email');
            });
    };

  return (
    <section id="contact" className="section bg-card-section">
      <ScrollReveal className="container contact-container glass-card">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-layout">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Info</h3>
            <ul className="info-list">
              <li>
                <a href=""><span className="icon" style={{fontSize: "18px", marginRight: "12px"}}><MdEmail/></span> rayhanalviansyah072@gmail.com</a>
                </li>
              <li>
                <a href=""><span className="icon" style={{fontSize: "18px", marginRight: "12px"}}><FaWhatsapp/></span> +62 838-0812-2556</a>
              </li>
            </ul>

            <h3 className="contact-subtitle mt-40">Social Handles</h3>
            <ul className="info-list">
              <li>
                <a href="https://www.linkedin.com/in/rayhanalvi/"> <span style={{fontSize: "18px", marginRight: "12px"}}><FaLinkedin /></span> Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/RayhanAlviansyah"><span style={{fontSize: "18px", marginRight: "12px"}}><FaGithub/></span> Github</a>
              </li>
            </ul>
          </div>
          
          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="from_name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="from_email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">Send</button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
