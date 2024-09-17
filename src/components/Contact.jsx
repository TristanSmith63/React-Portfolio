import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Contact() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <motion.div className="bg-gradient-to-r from-gray-3000 to-gray-300 p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center" initial="hidden" animate="visible" variants={cardVariants}>
        <p className="text-gray-400 mb-4 text-4xl">You can reach me at:</p>
        <div className="mb-4">
          <p className="text-lg text-bg-gray-400">Email: <a href="mailto:tristaaan633@outlook.com" className="text-gray-600 hover:text-black transition duration-300">tristaaan633@outlook.com</a></p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-bg-gray-400">GitHub: <a href="https://github.com/TristanSmith63" className="text-gray-600 hover:text-black transition duration-300">TristanSmith63</a></p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-bg-gray-400">LinkedIn: <a href="https://www.linkedin.com/in/tristan-smith-26b09a302/" className="text-gray-600 hover:text-black transition duration-300">Tristan Smith</a></p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
