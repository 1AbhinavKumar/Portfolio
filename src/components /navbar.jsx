import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// FaTimes is for cross sign (X) and  FaBars is for 3 bars
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        {/* we have used font-signautre for using our extra font that is not default  */}
        <h1 className="text-5xl font-signature">Abhi</h1>
      </div>

      <ul className="hidden md:flex">
        {/* hidden md: flex i.e if the width becomes < 768 px then the navbar gets hidden  */}

        {/*we have used destructuring here ({id,link}) to map the arr, we can also have directly used any variable then use variable.id and variable.link to access the element  */}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-50 md:hidden"
      >
        {/* toggling for cross and bar signs  */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {/* here we have used conditional statement  */}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className=" flex">
            <li className="mx-2 text-xl" ><a href="https://drive.google.com/file/d/1830fwLcnCa1y2l9s35smZtbWsq6k-k72/view?usp=sharing"  target="_blank" rel="noreferrer">Resume</a></li>
            <li className="mx-2 text-xl"><a href="https://www.linkedin.com/in/abhinav-kumar-1b9a3123b/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li className="mx-2 text-xl"><a href="https://github.com/1AbhinavKumar" target="_blank" rel="noreferrer"> Github</a></li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
