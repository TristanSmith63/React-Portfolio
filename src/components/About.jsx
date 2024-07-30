/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-12">
      <img src="src\assets\1721696873862.jpg" alt="Profile" className="rounded-full w-500 h-100 object-cover mb-6 md:mb-0 md:mr-6" />
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left max-w-md">
        <p>
          Hi, I'm Tristan Smith, a passionate and driven Full Stack Web Developer. I thrive on creating innovative web applications and am constantly seeking new challenges to expand my skill set. Alongside my tech pursuits, I have a deep love for cars and enjoy the thrill of working on them in my spare time. Additionally, I've ventured into private chefing, where I get to explore my creativity and share my culinary skills with others. I'm outgoing, eager to learn, and always excited to tackle new opportunities. Let's connect and build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
