import { useState } from "react";
import { Menu, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4 flex items-center justify-between px-6 relative">
      {/* Left Hamburger Icon */}
      <div className="relative">
        <div className="bg-black p-3 rounded-full absolute left-0 -top-4">
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Navigation Links and Centered Logo */}
      <div className="flex-1 flex justify-center items-center space-x-8 text-white text-lg font-semibold relative">
        <div className="bg-black px-5 py-2 absolute top-0.5 rounded-b-lg">
          <h1 className="text-white text-2xl font-bold">12AM</h1>
        </div>
      </div>
      
      {/* Right Profile Icon */}
      <div className="relative">
        <div className="bg-black p-3 rounded-full absolute right-0 -top-4">
          <button className="text-white p-2">
            <User size={24} />
          </button>
        </div>
      </div>
      
      {/* Menu Dropdown */}

    </nav>
  );
};

export default Navbar;
