import React, { useRef, useState } from "react";
import { List } from "../Icons";
import { Link } from "react-scroll";

const LINKS = [
  {
    id: 1,
    text: "home",
    scroll: 0,
  },
  {
    id: 2,
    text: "about",
    scroll: 514,
  },
  {
    id: 3,
    text: "support",
    scroll: 900,
  },
  {
    id: 4,
    text: "platforms",
    scroll: 1535,
  },
  {
    id: 5,
    text: "pricing",
    scroll: 1999,
  },
];

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const actionsContainer = useRef(null);
  const actions = useRef(null);

  return (
    <nav className="navbar fixed top-0 left-0 w-full p-3 bg-zinc-200 shadow-md z-50">
      <div className="flex flex-col justify-between items-center gap-0 w-full max-w-[1024px] mx-auto md:flex-row md:gap-5">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="uppercase text-3xl font-bold">logo</h1>
          <List
            className="w-7 h-auto cursor-pointer md:hidden"
            onClick={() => setToggleNavbar((prev) => !prev)}
          />
        </div>
        <div
          className="w-full duration-200 overflow-hidden md:!h-auto"
          style={{
            height: toggleNavbar ? actions.current.scrollHeight + "px" : 0,
          }}
          ref={actionsContainer}
        >
          <div
            className="flex flex-col justify-between items-center w-full duration-200 overflow-hidden md:flex-row md:!h-auto"
            ref={actions}
          >
            <ul
              className={`flex flex-col justify-between items-center gap-2 w-full sm:w-1/2 md:flex-row md:!m-0 md:w-auto`}
            >
              {LINKS.map((link, index) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      toggleNavbar && "slide"
                    } w-full rounded-md text-center -translate-y-[200px] transition capitalize cursor-pointer hover:bg-slate-50 md:!translate-y-0`}
                    style={{ animationDelay: `${0.5 * (1 / (2 + index))}s` }}
                  >
                    <Link
                      to={link.text}
                      smooth={false}
                      offset={-60}
                      className="block px-2 py-1"
                      onClick={() => setToggleNavbar(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-2 w-full mt-4 sm:w-1/2 md:flex-row md:w-auto md:!mt-0">
              <button className="w-full mr-3 px-4 py-2 text-main border border-main rounded-md transition capitalize hover:bg-main hover:text-white md:w-auto">
                log in
              </button>
              <button className="w-full px-4 py-2 rounded-md transition capitalize bg-main text-white hover:bg-main-darker md:w-auto">
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
