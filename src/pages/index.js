import Link from 'next/link';
import { useState } from 'react';
import SSRExample from './SSRExample';
import SSGExample from './SSGExample';
import { ClientSideRendering } from '@/components/ClientSideRendering';
import Login from '@/components/Login';

const RenderingTechniques = () => {
  const [renderingType, setRenderingType] = useState('');
  const [loggedInUser, setLoggedInUser] = useState({})

  const handleRenderingTypeChange = (type) => {
    setRenderingType(type);
  };

  return (
    <>
    {loggedInUser.username ?
    <div>
      <h1> Welcome {loggedInUser.username}</h1>
      <h1>Rendering Techniques</h1>
      <ul>
        <li>
          <Link href="#" onClick={() => handleRenderingTypeChange('SSR')}>
            Server-Side Rendering (SSR)
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleRenderingTypeChange('SSG')}>
            Static Site Generation (SSG)
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleRenderingTypeChange('CSR')}>
            Client-Side Rendering (CSR)
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleRenderingTypeChange('ISR')}>
            Incremental Static Regeneration (ISR)
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleRenderingTypeChange('SWR')}>
            SWR (React Query)
          </Link>
        </li>
      </ul>
      {renderingType === 'SSR' && <SSRExample />}
     {renderingType === 'SSG' && <SSGExample />}
      <ClientSideRendering />

    </div>
    :
  <Login setLoggedInUser={setLoggedInUser} />}
  </>
  );
};

export default RenderingTechniques;