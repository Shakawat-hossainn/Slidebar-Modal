import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Home = () => {
  const { openSide, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSide} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;