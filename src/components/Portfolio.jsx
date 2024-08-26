import { motion } from 'framer-motion';
import IMAGES from './images';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Portfolio() {
  const projects = [
    { 
      title: 'Social Thoughts', 
      link: 'https://drive.google.com/file/d/1sBOHkemTt6AZLlZtSPckmV9kUoOHRx5X/view', 
      repo: 'https://github.com/TristanSmith63/Social-Thoughts', 
      description: 'This a link to a Google Drive video, here i am showing off my skills with NoSQL using MongoDB, Express.js and Mongoose ODM. I built a API for a social network web application where users can share their thoughts, react to friends thoughts and create a friend list.',
      image: IMAGES.image6
    },
    { 
      title: 'EZChefApp', 
      link: 'https://grawrb.github.io/EZChefsApp/', 
      repo: 'https://github.com/Grawrb/EZChefsApp', 
      description: 'EZChefApp! This is one of my first group projects i did. This project is demoing our newly acquired skills and knowledge to build a web application from scratch. With the team, we conceive and execute a design that solves a real-world problem by integrating data received from multiple server-side API.',
      image: IMAGES.image4
    },
    { 
      title: 'Books And Booze', 
      link: 'https://books-and-booze.onrender.com/', 
      repo: 'https://github.com/TheKyleKirby/Books_and_Booze', 
      description: 'books and booze! This was my second group project on my web development journey. This here my not actaully be deployed because of Render only allow you to deploy one database at a time and because of other projects ive had to deploy i had to take that one down. But in my mean time let me give you a explaination on what the app does. Me and the team designed and built an app using the MVC paradigm, created our own server-side API, added user authentication, and connect to a database. I had the luxury of being the group project manager on this project. As the manager i was incharge of delacating work and keeping the flow of the project.',
      image: IMAGES.image3 
    },
    { 
      title: 'Weather Dashboard', 
      link: 'https://tristansmith63.github.io/Weather-Dashboard/', 
      repo: 'https://github.com/TristanSmith63/Weather-Dashboard', 
      description: 'This is my Weather dashboard app, here i am using the OpenWeather API and intergrating it into my own Weather Application that will run in the browser and feature dynamically updated HTML and CSS using the 5 Day Weather Forecast to retrieve weather data for cities.',
      image: IMAGES.image7 
    },
    { 
      title: 'My First Portfolio', 
      link: 'https://tristansmith63.github.io/TristansPortfolio/', 
      repo: 'https://github.com/TristanSmith63/TristansPortfolio', 
      description: 'This probably isnt the most admireable project that i have because this my was my second assignment in the class, but i think its inportant to know where you came from and to be able to look at the progress that youve made. Even tho is isnt the most amazing project ive worked on i love coming back and looking at this.',
      image: IMAGES.image5 
    },
    { 
      title: 'Personal Blog', 
      link: 'https://tristansmith63.github.io/personal-blog/', 
      repo: 'https://github.com/TristanSmith63/personal-blog', 
      description: 'My personal blog webpage, here you can express yourself in text form. I created a two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. This is where i learned to gain practical JavaScript experience, exploring the Document Object Models power, and set the stage for more advanced tasks.',
      image: IMAGES.image2 
    },
    { 
      title: 'Game Galaxxy', 
      link: 'https://game-galaxxy.onrender.com/', 
      repo: 'https://github.com/TheKyleKirby/GAME-GALAXXY?tab=readme-ov-file', 
      description: 'Welcome to GVME GVLVXXY: Your Portal to Mastering Games Game Galaxxy is a web-based platform designed to host and showcase game tutorials. Whether youre stuck on a level or looking for the best strategies, Game Galaxxy connects gamers with the content they need to succeed. From easy tips to galactically impossible challenges, explore, save, and share tutorials that make you a better gamer. This was my final project for the class.',
      image: IMAGES.image8
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
        {projects.map((project, index) => (
          <motion.div key={index} className="bg-gradient-to-r from-white to-white p-6 rounded-lg shadow-lg" variants={cardVariants}>
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="inline-block bg-gray-300 hover:bg-black00 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300">
              Deployed Application
            </a>
            <a href={project.repo} className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              GitHub Repository
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;
