import React from "react";
import "./UserProfile.css";
import { FaEnvelope, FaPhone, FaEdit, FaSignOutAlt } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <section className="profile-wrapper">
      <div className="paddings innerWidth profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src="./logo2.png" alt="user avatar" />
              <button className="edit-avatar">
                <FaEdit />
              </button>
            </div>
            <div className="profile-actions">
              <button className="edit-profile">
                <FaEdit /> Edit Profile
              </button>
              <button className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="user-info">
            <h2>John Doe</h2>
            <p className="user-email">john.doe@example.com</p>
            
            <div className="info-section">
              <h3>Contact Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <label>Phone</label>
                    <p>+84 123 456 789</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <label>Email</label>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite Properties */}
            <div className="info-section">
              <h3>Favorite Properties</h3>
              <div className="favorites-grid">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="property-card">
                    <img src="./hero-image.png" alt="property" />
                    <div className="property-info">
                      <h4>Beautiful House {item}</h4>
                      <p className="property-price">$500,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
