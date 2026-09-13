import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 mt-16">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          lg:gap-12
        ">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="DevStack"
                
              />

              {/* <span className="text-lg font-bold">
                Dev<span className="text-pink-500">Stack</span>
              </span> */}
            </div>

            <p className="text-sm text-base-content/50 mt-4 max-w-sm">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-5">

              <a
                href="#"
                className="text-sm hover:text-pink-500 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm hover:text-pink-500 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm hover:text-pink-500 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* Product */}
          <div>
            <h3 className="font-bold text-sm uppercase">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-base-content/50">
              <li>
                <a className="hover:text-pink-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a className="hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a className="hover:text-pink-500 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-base-content/50">
              <li>
                <a className="hover:text-pink-500 transition">
                  About
                </a>
              </li>

              <li>
                <a className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>

              <li>
                <a className="hover:text-pink-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm uppercase">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-base-content/50">
              <li>
                <a className="hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a className="hover:text-pink-500 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="
          border-t
          border-base-200
          mt-10
          pt-6
          flex
          flex-col
          sm:flex-row
          justify-between
          items-center
          gap-4
          text-sm
          text-base-content/40
        ">

          <p>
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-pink-500 transition">
              Privacy
            </a>

            <a className="hover:text-pink-500 transition">
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;