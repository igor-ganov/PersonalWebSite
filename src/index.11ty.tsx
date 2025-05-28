import Layout from "./_includes/layout/Layout";
import Greeting from "./components/_greeting";
export const data = {
  layout: "main",
  title: "Home",
};

const intro = {
  one: "Hello there!",
  two: "My name is Igor",
};
const aboutTitle = {
  title: "About me",
  role: "I'm a Full stack developer",
  experince: {
    title: "I've worked with different technologies, such as ...",
    details: ["C#", "JavaScript", "TypeScript", "Angular", "React"],
  },
};

export default () => (
  <Layout className="home component" title="Home">
    <link rel="stylesheet" href="./index.css" />
    <div className="animation-container">
      <Greeting />
    </div>
    <h2 className="about-title">{aboutTitle.title}</h2>
    <p className="about-role">{aboutTitle.role}</p>
    <p className="about-experince-title">{aboutTitle.experince.title}</p>
    <ul className="about-experince-details">
      {aboutTitle.experince.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
    <script src="./index.js"></script>
  </Layout>
);
