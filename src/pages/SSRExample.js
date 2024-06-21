import { useState, useEffect } from 'react';

const SSRExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));

      console.log("data..", data)
  }, []);

  return (
    <div>
      <h2>Server-Side Rendering (SSR) Example</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SSRExample;