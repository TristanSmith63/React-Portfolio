
function Resume() {
  return (
    <div className="container mx-auto py-12">
      <a href="public/assets/Tristan-Smith.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 inline-block transition duration-300">
        Download Resume
      </a>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <div className="md:mr-8">
          <h2 className="text-3xl font-bold mb-4">Proficiencies</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-lg text-gray-300">HTML</li>
            <li className="mb-2 text-lg text-gray-300">CSS</li>
            <li className="mb-2 text-lg text-gray-300">JavaScript</li>
            <li className="mb-2 text-lg text-gray-300">React</li>
            <li className="mb-2 text-lg text-gray-300">Node.js</li>
            <li className="mb-2 text-lg text-gray-300">Git</li>
            <li className="mb-2 text-lg text-gray-300">Web APIs</li>
            <li className="mb-2 text-lg text-gray-300">Third-Party APIs</li>
            <li className="mb-2 text-lg text-gray-300">Server-Side APIs</li>
            <li className="mb-2 text-lg text-gray-300">Express.js</li>
            <li className="mb-2 text-lg text-gray-300">SQL</li>
            <li className="mb-2 text-lg text-gray-300">Object-Relational Mapping(ORM)</li>
            <li className="mb-2 text-lg text-gray-300">Model-View-Controller(MVC)</li>
            <li className="mb-2 text-lg text-gray-300">NoSQL</li>
            <li className="mb-2 text-lg text-gray-300">Progressive Web Applications(PWA)</li>
            <li className="mb-2 text-lg text-gray-300">MERN</li>
            <li className="mb-2 text-lg text-gray-300">State</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <h2 className="text-3xl font-bold mb-4 mt-8 md:mt-0">Resume</h2>
          <iframe 
            src="/assets/Tristan-Smith.pdf" 
            className="w-full md:w-[600px] h-[800px] border-none"
            title="Resume"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;