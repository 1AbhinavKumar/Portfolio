import React from "react";
import news_Website from "../assets/news_Website.png";
import blog_website from "../assets/blog_Website.png";
import todo from "../assets/todo.png";
import cant from "../assets/cant.png";
import lc_id from "../assets/lc_id.png"
import cc_id from "../assets/cc_id.png"
import livelync from "../assets/livelync.png"

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: blog_website,
      demoLink: "https://github.com/1AbhinavKumar/Blog_App-",
      codeLink: "https://github.com/1AbhinavKumar/Blog_App-",
      about: "Tech Trends ",
    },
    {
      id: 7,
      src: livelync,
      demoLink: "https://github.com/1AbhinavKumar/Live-Lync",
      codeLink: "https://github.com/1AbhinavKumar/Live-Lync",
      about: "Live Lync",
    },
    {
      id: 2,
      src: news_Website,
      demoLink: "https://github.com/1AbhinavKumar/CRR-News",
      codeLink: "https://github.com/1AbhinavKumar/CRR-News",
      about: "CRR News",
    },
    {
      id: 3,
      src: todo,
      demoLink: "https://to-do-b16f.vercel.app/",
      codeLink: "https://github.com/1AbhinavKumar/TO-DO",
      about: "Action Agenda",
    },
    {
      id: 4,
      src: cant,
      demoLink: "https://github.com/1AbhinavKumar/Harsh-Canteen-site",
      codeLink: "https://github.com/1AbhinavKumar/Harsh-Canteen-site",
      about: "Canteen Website",
    },
    {
      id: 5,
      src: lc_id,
      demoLink: "https://leetcode.com/u/_Abhi___/",
      codeLink: "https://leetcode.com/u/_Abhi___/",
      about: "Leetcode Profile",
    },
    {
      id: 6,
      src: cc_id,
      demoLink: "https://www.codechef.com/users/abhi_110502",
      codeLink: "https://www.codechef.com/users/abhi_110502",
      about: "Codechef Profile",
    },

  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, about }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-36 w-full object-cover"
              />
              <div className="mt-1">
                <div className="text-center">
                  <span className="">{about}</span>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6  m-2 duration-200 hover:scale-105 text-center"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6  m-2 duration-200 hover:scale-105 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
