import React from 'react'
import './About.css'
import image_3 from '../../assets/image_3.jpeg'
import image_4 from '../../assets/image_4.jpg'
const About = () => {
  return (
      <div className='about' id='001'>
          <div className="about-left">
              <img src={image_3} alt="" className='about-img' />
          </div>
          <div className="about-right">
          <h1>About Us</h1>
            <h2>Welcome to MediBargain - Your Trusted Partner in Affordable Healthcare Solutions!</h2>
                <p>At MediBargain, we're on a mission to revolutionize access to healthcare essentials by making them more affordable and accessible to everyone. Founded in [year], we have been dedicated to ensuring that individuals and families have access to high-quality medical supplies, medications, and healthcare services without breaking the bank</p>
            <h2>Our Vision</h2>
                <p>We envision a world where healthcare is not a luxury but a basic human right. A world where everyone can afford the essential healthcare products and services they need to live healthier, happier lives.</p>
            <h2>Our Mission</h2>
                <p>Our mission is simple yet profound: to democratize healthcare by offering affordable, high-quality medical supplies, medications, and services to all. We believe that no one should have to compromise on their health due to financial constraints.</p>
          </div>
      </div>
  )
}

export default About