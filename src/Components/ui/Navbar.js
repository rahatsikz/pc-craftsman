/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import logo from "/public/pc-high-resolution-logo-color-on-transparent-background.png";

const Navbar = () => {
  return (
    <div className="bg-base-200 ">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ul className="p-2 text-lg">
                  <a>Category</a>
                  <li>
                    <Link href="/category/CPU">CPU</Link>
                  </li>
                  <li>
                    <Link href="/category/Motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/category/Ram">Ram</Link>
                  </li>
                  <li>
                    <Link href="/category/Power Supply Unit">Power Supply</Link>
                  </li>
                  <li>
                    <Link href="/category/Storage Device">Storage Device</Link>
                  </li>
                  <li>
                    <Link href="/category/Monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/category/Others">Others</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/">
            <img src={logo.src} alt="" className="w-20" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10">
            <li tabIndex={0} className="text-lg">
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/category/CPU">CPU</Link>
                  </li>
                  <li>
                    <Link href="/category/Motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/category/Ram">Ram</Link>
                  </li>
                  <li>
                    <Link href="/category/Power Supply Unit">Power Supply</Link>
                  </li>
                  <li>
                    <Link href="/category/Storage Device">Storage Device</Link>
                  </li>
                  <li>
                    <Link href="/category/Monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/category/Others">Others</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white">PC Builder</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
