import { Link } from 'react-router-dom';
import logoSrc from '../assets/sonic-logo-black.svg'

function HomePage() {
  return (
    <div className='flex flex-col gap-4 justify-center'>
        <img src={logoSrc} alt="" />
      <h2>Welcome to a little sample home page to show of the router in React.</h2>
      <p className='m-10'>Click on the button to go to the products.</p>
      <Link to="/products" className="bg-[#d2d5d7] text-black p-4 rounded text-center hover:bg-[#c2c2c2]">
        View Products
      </Link>
    </div>
  );
}

export default HomePage;
