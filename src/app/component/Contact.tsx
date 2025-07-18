import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#111827' }}>
      <div className="container mx-auto text-center px-6 lg:px-12 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide drop-shadow-md">
          Contact
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Feel free to reach out to me via email or LinkedIn!
        </p>

        <a
          href="mailto:faiqahmed73@hotmail.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300"
        >
          Email Me
        </a>

        <div className="mt-10 flex justify-center space-x-8 text-indigo-400 text-lg">
          <a
            href="https://linkedin.com/in/faiqahmed02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 underline transition-colors duration-300"
          >
            LinkedIn
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://github.com/faiqahmed02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 underline transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
