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
  <div className="greeting component">
    <div
      className="avatar-container animated animation-greeting-container fixed"
    >
      <picture
        className="avatar animated animation-greeting-avatar"
      >
        <img src="assets/avatar.jpg" alt="My avatar" />
      </picture>
      <div className="intro-text">
        <h1
          className="intro animated animation-greeting starting-animation-greeting"
        >
          {intro.one}
        </h1>

        <h1
          className="intro animated animation-intro"
        >
          {intro.two}
        </h1>
      </div>
    </div>
  </div>
);
