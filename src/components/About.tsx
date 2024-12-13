import Info from '../Data/Info';
import Professional_Summary from '../Data/ProfessionalSummary';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>

      <section>
        <h2>{Professional_Summary.title}</h2>
        <p>{Professional_Summary.content}</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {Info.email}</p>
        <p><strong>Phone:</strong> {Info.phone}</p>
        <p><strong>LinkedIn:</strong> <a href={`https://${Info.linkedIn}`} target="_blank" rel="noopener noreferrer">{Info.linkedIn}</a></p>
      </section>

      <section>
        <h2>Location</h2>
        <p>{Info.currentPosition}, {Info.location}</p>
      </section>
    </div>
  );
};

export default About;
