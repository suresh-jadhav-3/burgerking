import React from 'react';

function About() {
  return (
    <section className='py-16 bg-gray-50' 
     data-aos="fade-up"
     data-aos-duration='2000'
    >
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>About Us</h1>
        <p className='text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto'>
          Welcome to Burger Shop! We are passionate about serving delicious burgers made from the freshest ingredients. Our journey began with a simple idea: to create the ultimate burger experience that brings people together.
        </p>
        <p className='text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto'>
          At Burger Shop, we believe in quality over quantity. Each burger is crafted with care, using only the finest meats, vegetables, and spices. Our menu offers a variety of options, including classic favorites and unique creations, ensuring there's something for everyone to enjoy.
        </p>
        <p className='text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto'>
          Our team is dedicated to providing exceptional service and a warm, inviting atmosphere. Whether you're dining in, taking out, or ordering delivery, we strive to make every visit memorable.
        </p>
        <p className='text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto'>
          Join us on our mission to spread joy through great food. We invite you to explore our menu and discover your new favorite burger!
        </p>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mt-10'>Our Values</h2>
        <ul className='list-disc list-inside mt-5 max-w-3xl mx-auto text-lg text-gray-600'>
          <li>Quality Ingredients</li>
          <li>Customer Satisfaction</li>
          <li>Community Engagement</li>
          <li>Innovation in Flavor</li>
        </ul>
      </div>
    </section>
  );
}

export default About;