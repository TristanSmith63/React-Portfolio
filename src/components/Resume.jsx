function Resume() {
  return (
    <div className="container mx-auto py-12">
      <a href="public/assets/Tristan-Smith.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 inline-block transition duration-300">
        Download Resume
      </a>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        {/* Credly Badge Section */}
        <div className="md:mr-8">
          <h2 className="text-3xl font-bold mb-4">Full Stack Coding Boot Camp</h2>
          <a href="https://www.credly.com/badges/48250083-0003-4abc-b053-2cfe42040c37/linked_in?t=sjmct3" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/image.png"
              alt="Full Stack Coding Boot Camp Badge"
              className="w-65 h-65 mb-5"
            />
          </a>
          <p className="text-lg mb-6">
            Issued by the University of Utah. Demonstrates knowledge of a wide range of web development skills and technologies.
          </p>
        </div>

        {/* Proficiencies List */}
<div className="md:mr-8">
  <h2 className="text-3xl font-bold mb-4">Proficiencies</h2>
  <ul className="list-disc list-inside">
    <li className="mb-2 text-lg text-bg-gray-400">CSS</li>
    <li className="mb-2 text-lg text-bg-gray-400">Express.js</li>
    <li className="mb-2 text-lg text-bg-gray-400">Git</li>
    <li className="mb-2 text-lg text-bg-gray-400">Github</li>
    <li className="mb-2 text-lg text-bg-gray-400">Heroku</li>
    <li className="mb-2 text-lg text-bg-gray-400">HTML (HTML5)</li>
    <li className="mb-2 text-lg text-bg-gray-400">JavaScript</li>
    <li className="mb-2 text-lg text-bg-gray-400">JQuery</li>
    <li className="mb-2 text-lg text-bg-gray-400">MongoDB</li>
    <li className="mb-2 text-lg text-bg-gray-400">MySQL</li>
    <li className="mb-2 text-lg text-bg-gray-400">Node.js</li>
    <li className="mb-2 text-lg text-bg-gray-400">React</li>
    <li className="mb-2 text-lg text-bg-gray-400">SEO</li>
    <li className="mb-2 text-lg text-bg-gray-400">Responsive Design</li>
    <li className="mb-2 text-lg text-bg-gray-400">API/JSON</li>
    <li className="mb-2 text-lg text-bg-gray-400">RESTful API</li>
    <li className="mb-2 text-lg text-bg-gray-400">State Management</li>
    <li className="mb-2 text-lg text-bg-gray-400">Command Line</li>
    <li className="mb-2 text-lg text-bg-gray-400">Database Theory</li>
    <li className="mb-2 text-lg text-bg-gray-400">Agile Methodologies</li>
    <li className="mb-2 text-lg text-bg-gray-400">Quality Assurance Testing</li>
    <li className="mb-2 text-lg text-bg-gray-400">Social Coding Best Practices</li>
  </ul>
</div>


        {/* Resume Section */}
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
