import React from 'react';

const DashboardPage = ({ data }) => {
  return <h1>Dashboard - {data.message}</h1>;
};

export async function getServerSideProps() {
  return {
    props: {
      data: {
        message: 'Welcome to the dashboard!',
      },
    },
  };
}

export default DashboardPage;