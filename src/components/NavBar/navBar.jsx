import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black text-white flex justify-between items-center px-5 py-2.5 font-sans">
      <div className="flex items-center gap-4">
        <button className="text-2xl"><FaBars /></button>
      </div>
      <ul className="flex gap-5 mx-auto">
        <li className="px-4 py-2.5 cursor-pointer hover:text-gray-300">HOME</li>
        <li className="px-4 py-2.5 cursor-pointer hover:text-gray-300">SHOP</li>
        <li className="px-4 py-2.5 bg-black text-white cutout-bottom cursor-pointer">12AM</li>
        <li className="px-4 py-2.5 cursor-pointer hover:text-gray-300">CONTACT</li>
        <li className="px-4 py-2.5 cursor-pointer hover:text-gray-300">CART</li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-2xl"><FaShoppingCart /></button>
        <button className="text-2xl"><FaUser /></button>
      </div>
    </nav>
  );
};

export default Navbar;