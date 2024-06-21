// import { getStaticProps } from 'next';

const SSGExample = ({ data }) => {
    data = getStaticProps()
  return (
    <div>
      <h2>Static Site Generation (SSG) Example</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return { props: { data } };
};

export default SSGExample;