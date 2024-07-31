import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Resume() {
  return (
    <div className="container mx-auto py-12">
      <a href="src/assets/Tristan-Smith.pdf" download className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-8 inline-block transition duration-300">
        Download Resume
      </a>
      <div className="flex flex-col md:flex-row items-start md:justify-center">
        <motion.div className="md:mr-8" initial="hidden" animate="visible" variants={cardVariants}>
          <h2 className="text-3xl font-bold mb-4">Proficiencies</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-lg text-black">HTML</li>
            <li className="mb-2 text-lg text-black">CSS</li>
            <li className="mb-2 text-lg text-black">JavaScript</li>
            <li className="mb-2 text-lg text-black">React</li>
            <li className="mb-2 text-lg text-black">Node.js</li>
            <li className="mb-2 text-lg text-black">Git</li>
            <li className="mb-2 text-lg text-black">Web APIs</li>
            <li className="mb-2 text-lg text-black">Third-Party APIs</li>
            <li className="mb-2 text-lg text-black">Server-Side APIs</li>
            <li className="mb-2 text-lg text-black">Express.js</li>
            <li className="mb-2 text-lg text-black">SQL</li>
            <li className="mb-2 text-lg text-black">Object-Relational Mapping(ORM)</li>
            <li className="mb-2 text-lg text-black">Model-View-Controller(MVC)</li>
            <li className="mb-2 text-lg text-black">NoSQL</li>
            <li className="mb-2 text-lg text-black">Progressive Web Applications(PWA)</li>
            <li className="mb-2 text-lg text-black">MERN</li>
            <li className="mb-2 text-lg text-black">State</li>
          </ul>
        </motion.div>
        <motion.div className="flex-shrink-0" initial="hidden" animate="visible" variants={cardVariants}>
          <h2 className="text-3xl font-bold mb-4 mt-8 md:mt-0">Resume</h2>
          {/* Resume */}
          <iframe 
            src="public/assets/Tristan-Smith.pdf" 
            className="w-full md:w-[600px] h-[800px] border-none"
            title="Resume"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
