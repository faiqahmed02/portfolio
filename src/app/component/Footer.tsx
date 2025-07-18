import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} <strong>Faiq Ahmed</strong>. All rights reserved.
        </p>

        <div className="mt-4 md:mt-0 space-x-4">
          <a
            href="mailto:faiqahmed73@hotmail.com"
            className="hover:underline text-sm"
            aria-label="Email Faiq"
          >
            faiqahmed73@hotmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/faiqahmeddev"
            className="hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Faiq's LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/faiqahmed73"
            className="hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Faiq's GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
