import React from 'react';

const Partners: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <section className="text-white px-6 py-12 md:px-12 font-albert-sans mx-auto justify-center">
        <h1 className="text-4xl font-bold mb-4 font-albert-sans">Our Partners!</h1>
        <p className="text-lg max-w-xl font-albert-sans text-white">
          Interested in hearing how we can help you? Contact us at{' '}
          <a href="mailto:ds3@ucsd.edu" className="underline hover:text-gray-300">
            ds3@ucsd.edu
          </a>{' '}
          or view our sponsor package{' '}
          <a
            href="/path/to/sponsor-package.pdf"
            className="underline hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 mt-12">
          <img src="src/Assets/Images/CSE_logo.png" alt="" />
          <img src="src/Assets/Images/palantir-vector-logo.svg" className="w-1/4" alt="" />
          <img src="src/Assets/Images/HDSI_logo.png" className="w-1/4" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Partners;