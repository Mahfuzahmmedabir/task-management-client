import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Task Manager</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              open modal
            </button>
            <dialog
              id="my_modal_3"
              className="modal flex justify-end lg:-top-60 -ml-6 items-center"
            >
              <div className="modal-box w-96 ">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div>
                  <h3 className="font-bold text-lg">{user?.displayName}</h3>
                  <p className="">{user?.email}</p>
                </div>
              </div>
            </dialog>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Login
            </Link>
            <Link
              to={'/login'}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>

    // <div className=" sticky top-0 ">
    //   <header
    //     className={`p-4 shadow-md ${
    //       darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    //     }`}
    //   >
    //     <div className="flex justify-between sticky top-0 items-center">
    //       {/* Logo & App Name */}
    //       <div className="flex items-center">
    //         <span className="text-2xl font-bold"> TaskManager</span>
    //       </div>
    //       {/* Right Side: Login/Sign Up & Dark Mode Toggle */}
    //       <div className="flex  items-center">
    //         <button
    //           onClick={() => setDarkMode(!darkMode)}
    //           className="p-2 rounded-full"
    //         >
    //           {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    //         </button>
    //         {/* <Link to={'/dashbord'}>Dashbord</Link> */}

    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Navbar;
