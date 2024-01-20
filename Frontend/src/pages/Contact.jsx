import React from 'react';

const Contact = () => {
  document.title = "Blog | Contact Us";

  return (
    <div className="max-w-2xl mx-auto p-3 md:p-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <p className="text-lg leading-relaxed mb-10">
        We value your feedback and would love to connect with you. Reach out to us
        using the following methods:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div>
          <h3 className="text-xl font-bold mb-4">Send Us an Email</h3>
          <p className="mb-4">
            Have a question or suggestion? Drop us an email, and we'll get back to
            you as soon as possible.
          </p>
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline"
          >
            Email Us
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
          <p className="mb-4">
            Stay updated on our latest content and announcements by following us on
            social media.
          </p>
          <div className="flex items-center space-x-2 md:space-x-4 ">
            <a
              href="https://twitter.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
