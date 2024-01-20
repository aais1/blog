import React from 'react';

const About = () => {
  document.title = "Blog | About Us";

  return (
    <div className="max-w-2xl mx-auto p-8 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-8">Welcome to Our Blog!</h2>
      <p className="text-lg leading-relaxed mb-8">
        <strong>Hey There,</strong> we're on a mission to provide you with quality content
        covering a wide range of topics. Whether you're interested in the latest
        technology trends, seeking travel inspiration, or looking for fashion tips,
        we've got you covered.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Our team is passionate about sharing knowledge and experiences. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur vel
        risus at libero ullamcorper fermentum.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        Explore our diverse content, and feel free to reach out if you have any
        questions or suggestions. Thank you for being a part of our community!
      </p>
    </div>
  );
};

export default About;
