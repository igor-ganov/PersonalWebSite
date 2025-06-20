import Layout from "./_includes/layout/Layout";
import AnimationBlock from "./components/_animationBlock";
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

const Index = () => (
  <Layout className="home component" title="Home">
    <link rel="stylesheet" href="./index.css"/>
    <AnimationBlock />
    <script src="./index.js"></script>
  </Layout>
);

export default Index;
