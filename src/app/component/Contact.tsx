import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">Feel free to reach out to me via email or LinkedIn!</p>
        <a href="mailto:faiqahmed73@hotmail.com" className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-secondary">Email Me</a>
        <div className="mt-6">
          <a href="https://linkedin.com/in/faiqahmed02" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            LinkedIn
          </a>
          <span className="mx-2">|</span>
          <a href="https://github.com/faiqahmed02" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            GitHub
          </a>
        </div>
      </div>
     </section>
  )
}

export default Contact