function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo / Name */}
      <div className="text-xl font-bold">
        YOUSOOPHER
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;