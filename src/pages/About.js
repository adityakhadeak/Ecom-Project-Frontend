// src/components/AboutUs.js
import React from 'react';
import '../utils/pages-css/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBullseye, faCode, faUsers, faShieldAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-us-header">
        <h1>About QuickCart</h1>
        <p>Your Premier Destination for Electronics</p>
      </div>
      
      {/* Vision Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faBullseye} className="icon" /> Our Vision</h2>
        <p>
          QuickCart is dedicated to becoming the top destination for electronics enthusiasts, offering the latest in
          technology, a wide range of products, and a seamless shopping experience. We envision a world where tech 
          lovers have access to the best gadgets at their fingertips.
        </p>
      </section>
      
      {/* Journey Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faGlobe} className="icon" /> Our Journey</h2>
        <p>
          Founded with a passion for technology, QuickCart was designed to cater to tech enthusiasts. Our journey
          has been fueled by the desire to create a platform that provides convenience, efficiency, and an unparalleled
          shopping experience in the world of electronics.
        </p>
      </section>
      
      {/* Technology Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faCode} className="icon" /> Our Technology</h2>
        <p>
          We leverage the latest technologies like React, Node.js, and cloud solutions (AWS) to provide a highly responsive
          and scalable platform. Our tech stack ensures security, performance, and a seamless user experience across all
          devices.
        </p>
      </section>
      
      {/* Target Audience Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faUsers} className="icon" /> Our Target Audience</h2>
        <p>
          QuickCart caters to tech enthusiasts, professionals, students, and small businesses looking for reliable and 
          cutting-edge electronics. We pride ourselves on delivering products that meet the needs of a diverse customer base.
        </p>
      </section>
      
      {/* Values Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faShieldAlt} className="icon" /> Our Values</h2>
        <p>
          Our values are rooted in providing excellent customer service, secure transactions, and a seamless shopping 
          experience. We strive to build trust with our customers by offering reliable products, top-notch support, and 
          secure payment gateways.
        </p>
      </section>
      
      {/* Future Goals Section */}
      <section className="section">
        <h2><FontAwesomeIcon icon={faRocket} className="icon" /> Our Future Goals</h2>
        <p>
          As we continue to grow, QuickCart aims to expand into smart home devices, wearables, and other tech categories.
          Our goal is to become the ultimate destination for all things electronic, providing quality, innovation, and 
          exceptional service.
        </p>
      </section>

      
    </div>
  );
};

export default About;
