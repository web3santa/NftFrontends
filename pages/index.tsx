import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Body from '../components/Body';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center'>
        <Body />

      </div>
    </div>
  );
};

export default Home;
