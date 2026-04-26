import { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background Text Animation
      gsap.from(".bg-text-overlay", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        }
      });

      // Info Cards Animation
      gsap.from(".info-item", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        }
      });

      // Form Animation
      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/ and create:
      // 1. A service (Gmail, Outlook, etc.)
      // 2. An email template
      // 3. Get your public key
      
      const templateParams = {
        to_email: 'amansanvat@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        reply_to: formData.email
      };
      
      // Your EmailJS credentials (Get these from your EmailJS account)
      const SERVICE_ID = 'service_s8bq8bt';     // Replace with your Service ID
      const TEMPLATE_ID = 'template_frhzlfk';   // Replace with your Template ID  
      const PUBLIC_KEY = '4qrFHXpUXnSffAKjA';     // Replace with your Public Key
      
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="contact-section" ref={sectionRef}>
      {/* Background Overlay Text */}
      <div className="bg-text-overlay">CONTACT</div>

      <div className="contact-container">
        {/* Header matching Projects/Services style */}
        <div className="contact-header">
          <div className="expertise-tag">
            <span className="dot"></span>
            Let's Collaborate
          </div>
          <div className="header-right">
            <h2 className="section-main-title">Get In <span>Touch</span></h2>
            <p className="header-text">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or original visions.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box"><Mail size={24} /></div>
              <div className="info-content">
                <span>Email Me</span>
                <p>amansanvat@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Phone size={24} /></div>
              <div className="info-content">
                <span>Call Me</span>
                <p>+91 95745 03240</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><MapPin size={24} /></div>
              <div className="info-content">
                <span>Location</span>
                <p>Amreli, Gujarat, India</p>
              </div>
            </div>

            <div className="social-links">
               <a href="https://github.com/smanaman"><Github /></a>
               <a href="#"><Linkedin /></a>
               <a href="#"><Instagram /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Tell me about your project..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              {!isSubmitting && <Send size={18} />}
            </button>
            {submitStatus === 'success' && (
              <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
                ✓ Message sent successfully to amansanvat@gmail.com!
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
                ✗ Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;