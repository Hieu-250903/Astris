import React from "react";
import "./Profile.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Profile = () => {
  return (
    <section className="profile-wrapper">
      <div className="paddings innerWidth profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover">
            <img src="./hero-image.png" alt="cover" className="cover-img" />
          </div>
          <div className="profile-info">
            <div className="profile-avatar">
              <img src="./logo2.png" alt="avatar" />
            </div>
            <div className="profile-details">
              <h1>John Doe</h1>
              <h3>Real Estate Professional</h3>
              <div className="profile-social">
                <a href="#" className="social-link">
                  <FaFacebook className="social-icon facebook" />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram className="social-icon instagram" />
                </a>
                <a href="#" className="social-link">
                  <FaYoutube className="social-icon youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-section">
            <h2>About Me</h2>
            <p>
              Professional real estate agent with over 10 years of experience in helping
              clients find their dream homes. Specializing in residential properties
              and luxury real estate.
            </p>
          </div>

          <div className="profile-section">
            <h2>Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+84 123 456 789</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>johndoe@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>123 Real Estate Street, City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>My Listings</h2>
            <div className="listings-grid">
              {/* Sample Listings */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="listing-card">
                  <img src="./hero-image.png" alt="property" />
                  <div className="listing-info">
                    <h3>Beautiful House {item}</h3>
                    <p>$500,000</p>
                    <p><FaMapMarkerAlt /> 123 Street, City</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
