
import logo from "../assets/logo-text.png";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
      <div className="navbar max-w-6xl mx-auto px-3 h-14">

        {/* Mobile Hamburger */}
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-sm btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 p-2 shadow-lg border"
            >
              <li><a>Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-start md:navbar-start">
          <a className="flex items-center gap-2">
            
           
            <img src={logo} alt="logo" />

            
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-2">
            <li><a className="text-pink-500">Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Auth */}
        <div className="navbar-end gap-1 md:gap-4">

          <button className="btn btn-ghost btn-xs md:btn-sm">
            Sign In
          </button>

          <button className="btn btn-xs md:btn-sm bg-pink-500 hover:bg-pink-600 text-white border-none rounded-full px-3 md:px-5">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;