function Resume() {
  return (
    <div className="resume">
      <a href="path-to-your-resume.pdf" download className="btn btn-primary mb-4">Download Resume</a>
      <h2>Proficiencies</h2>
      <ul className="list-group">
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Node.js</li>
        {/* add more proficiencies */}
      </ul>
    </div>
  );
}

export default Resume;
