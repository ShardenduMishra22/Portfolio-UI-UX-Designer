import Experience from "../Data/Experience";

const ExperiencePage = () => {
  return (
    <div>
      <h1>Experience</h1>
      {Experience.map((exp, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{exp.post}</h2>
          <h3>{exp.companyName}</h3>
          <p><strong>Duration:</strong> {exp.duration}</p>
          <ul>
            {exp.jobDescription.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage;
