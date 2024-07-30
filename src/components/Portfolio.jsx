function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://project1.com', repo: 'https://github.com/TristanSmith63' },
    { title: 'EZChefApp', link: 'https://grawrb.github.io/EZChefsApp/', repo: 'https://github.com/Grawrb/EZChefsApp' },
    { title: 'Books And Booze', link: 'https://books-and-booze.onrender.com/', repo: 'https://github.com/TheKyleKirby/Books_and_Booze' },
    { title: 'Weather Dashboard', link: 'https://tristansmith63.github.io/Weather-Dashboard/', repo: 'https://github.com/TristanSmith63/Weather-Dashboard' },
    { title: 'My First Portfolio', link: 'https://tristansmith63.github.io/TristansPortfolio/', repo: 'https://github.com/TristanSmith63/TristansPortfolio' },
    { title: 'Personal Blog', link: 'https://tristansmith63.github.io/personal-blog/', repo: 'https://github.com/TristanSmith63/personal-blog?tab=readme-ov-file' },

    
    // more projects...
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <a href={project.link}>Deployed Application</a>
          <a href={project.repo}>GitHub Repository</a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
