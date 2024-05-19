import React from "react";
import news_Website from "../assets/news_Website.png";
import blog_website from "../assets/blog_Website.png";
import todo from "../assets/todo.png";
import port_image from "../assets/portfolio_image.png";
import calc from "../assets/calc.png";
import cant from "../assets/cant.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog_website,
      demoLink: "https://github.com/1AbhinavKumar/Blog_App-",
      codeLink: "https://github.com/1AbhinavKumar/Blog_App-"
    },
    {
      id: 2,
      src: news_Website,
      demoLink: "https://github.com/1AbhinavKumar/CRR-News",
      codeLink: "https://github.com/1AbhinavKumar/CRR-News"
    },
    {
      id: 3,
      src: todo,
      demoLink: "https://to-do-b16f.vercel.app/",
      codeLink: "https://github.com/1AbhinavKumar/TO-DO"
    },
    {
      id: 4,
      src: cant,
      demoLink: "https://github.com/1AbhinavKumar/Harsh-Canteen-site",
      codeLink: "https://github.com/1AbhinavKumar/Harsh-Canteen-site"
    },
    {
      id: 5,
      src: calc,
      demoLink: "https://github.com/1AbhinavKumar/Calculator-",
      codeLink: "https://github.com/1AbhinavKumar/Calculator-"
    },
    {
      id: 6,
      src: port_image,
      demoLink: "https://portfolio-green-xi-11.vercel.app/",
      codeLink: "https://github.com/1AbhinavKumar/Portfolio"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-36 w-full object-cover"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
