// pages/index.js
import React from 'react';
import HelloWorld from '../components/helloWorld';

const HomePage = () => {
  return (
    <div>
      <HelloWorld />
      <p>
        <a href="/api/hello">Call server-side API</a>
      </p>
    </div>
  );
};

export default HomePage;