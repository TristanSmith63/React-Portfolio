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
      description: 'This is a link to a Google Drive video where I showcase my skills with NoSQL using MongoDB, Express.js, and Mongoose ODM. I built an API for a social network web application, enabling users to share thoughts, react to friends\' thoughts, and create a friend list.',
      image: IMAGES.image6
    },
    { 
      title: 'EZChefApp', 
      link: 'https://grawrb.github.io/EZChefsApp/', 
      repo: 'https://github.com/Grawrb/EZChefsApp', 
      description: 'EZChefApp is one of my first group projects. In this project, we showcased our newly acquired skills by building a web application from scratch. Together, our team conceived and executed a design that solved a real-world problem by integrating data from multiple server-side APIs.',
      image: IMAGES.image4
    },
    { 
      title: 'Books And Booze', 
      link: 'https://books-and-booze.onrender.com/', 
      repo: 'https://github.com/TheKyleKirby/Books_and_Booze', 
      description: 'Books and Booze was my second group project in my web development journey. It may not currently be deployed due to Render\'s single database deployment limit, but here\'s what it does: our team designed and built an app using the MVC paradigm, created our own server-side API, added user authentication, and connected to a database. As the group project manager, I was responsible for delegating tasks and ensuring smooth project workflow.',
      image: IMAGES.image3 
    },
    { 
      title: 'Weather Dashboard', 
      link: 'https://tristansmith63.github.io/Weather-Dashboard/', 
      repo: 'https://github.com/TristanSmith63/Weather-Dashboard', 
      description: 'This is my Weather Dashboard app, where I used the OpenWeather API to integrate weather data into a browser-based application featuring dynamically updated HTML and CSS. It provides a 5-day weather forecast for various cities.',
      image: IMAGES.image7 
    },
    { 
      title: 'My First Portfolio', 
      link: 'https://tristansmith63.github.io/TristansPortfolio/', 
      repo: 'https://github.com/TristanSmith63/TristansPortfolio', 
      description: 'This may not be my most impressive project, as it was my second assignment in class. However, I believe it\'s important to reflect on progress over time. Even though it\'s not my finest work, I appreciate looking back at how far I\'ve come.',
      image: IMAGES.image5 
    },
    { 
      title: 'Personal Blog', 
      link: 'https://tristansmith63.github.io/personal-blog/', 
      repo: 'https://github.com/TristanSmith63/personal-blog', 
      description: 'My personal blog webpage allows users to express themselves in text form. I created a two-page website where users can input and view blog posts. This project includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. It helped me gain practical JavaScript experience and explore the Document Object Model (DOM).',
      image: IMAGES.image2 
    },
    { 
      title: 'Game Galaxxy', 
      link: 'https://game-galaxxy.onrender.com/', 
      repo: 'https://github.com/TheKyleKirby/GAME-GALAXXY?tab=readme-ov-file', 
      description: 'Welcome to Game Galaxxy: Your Portal to Mastering Games. Game Galaxxy is a web-based platform designed to host and showcase game tutorials. Whether you\'re stuck on a level or looking for strategic tips, Game Galaxxy connects gamers with the content they need to succeed. This was my final project for the class, showcasing advanced collaboration and project development skills.',
      image: IMAGES.image8
    },
    { 
      title: 'Lazy J Meats', 
      link: 'https://lazyjmeatsut.com/', 
      repo: 'https://github.com/TristanSmith63/LazyJsMeats', 
      description: 'I\'m particularly proud of the work I did for a local company, Lazy J Meats, where I built and deployed a comprehensive website (lazyjmeatsut.com). I worked closely with the client to design a fully customized frontend UI and a robust backend system that empowered their employees to manage menu items and post announcements seamlessly. My greatest satisfaction came from developing the backend architecture, including database integration and routing that effectively connected the admin portal to the user interface. Seeing how delighted the client was with the final product, which met all their expectations, filled me with pride and reaffirmed my passion for building solutions that make a real impact.',
      image: IMAGES.image9
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
