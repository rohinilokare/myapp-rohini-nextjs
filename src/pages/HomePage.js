// pages/index.js
import React from 'react';
import HelloWorld from '../components/HelloWorld';

const HomePage = () => {
  return (
    <div>
      <HelloWorld />
      <p>
       1. <a href="/api/hello">Call server-side API</a>
      </p>
      <p>
        2. <a href="/about">About Us</a>
      </p>
      <p>
        3. <a href="/dashboard">Dashboard</a>
      </p>
      <p>
        4. <a href="/blog/1">Passing the blog id 1</a>
      </p>
    </div>
  );
};

export default HomePage;