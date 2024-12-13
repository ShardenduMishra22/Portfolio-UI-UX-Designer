import Projects from '../Data/Projects'; // Ensure this matches the correct path for your data

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>

      {Projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{project.title}</h2>
          <ul>
            {project.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
