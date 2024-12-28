import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Faiq Ahmed. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;