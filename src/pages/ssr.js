import React from 'react';

const SSRPage = () => {
  return <h1>Server-side rendered page</h1>;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default SSRPage;