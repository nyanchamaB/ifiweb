import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const DemoPage = () => {
  return (
    <div className="demo-page">
      <section className="demo-section">
        <div className="demo-section-left">
          <h1>Book a Demo</h1>
          <h3>Get the chance to have Schoolifi in action</h3>
          <p>Take a tour to give you more insight on how you can manage your workload as a teacher,student or administrator. We have a well designed platform with different functionalities to make learning easier without forgetting management. </p>
        </div>
        <div className="demo-section-right">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Organization/School</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="interest">What are you looking for?</label>
              <textarea id="interest" name="interest"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="howDidYouHear">How did you hear about us?</label>
              <select id="howDidYouHear" name="howDidYouHear">
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="social-media">Via Social Media</option>
                <option value="event">Virtual/Physical Event</option>
                <option value="blog">Blog/Publications</option>
                <option value="word-of-mouth">Word of Mouth</option>
                <option value="referrals">Referrals</option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="demo-section1">
        <div className="demo-section-left1">
          <h2>Schoolifi</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="demo-section-right1">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><FaPhoneAlt /> Phone: 254-741-677-901</p>
            <p><FaEnvelope /> Email: schoolifi254@gmail.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61562514097856" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/schoolifi254/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/schoolifi-community-5b2722310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@School-ifi" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>

      
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 SCHOOL IFI. Design by{" "}
            <a href="https://www.linkedin.com/in/schoolifi-community-5b2722310/" rel="nofollow">
              Schoolifi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;