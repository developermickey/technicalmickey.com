import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        id="nav"
        className="bg-gray-800 w-full h-24 flex items-center justify-between px-28"
      >
        <h1 className="text-white text-2xl font-medium">
          <span className="text-yellow-400 stretched">T</span>
          echnical <span className="text-yellow-400 stretched">M</span>ickey
        </h1>

        <ul className="flex text-white gap-10">
          <li>
            <Link
              className="transition ease-linear duration-300 hover:text-zinc-400"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition ease-linear duration-300 hover:text-zinc-400"
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="transition ease-linear duration-300 hover:text-zinc-400"
              to="/course"
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              className="transition ease-linear duration-300 hover:text-zinc-400"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="transition ease-linear duration-300 hover:text-zinc-400"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
