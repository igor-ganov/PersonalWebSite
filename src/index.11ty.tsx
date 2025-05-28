import Layout from "./_includes/layout/Layout";

export const data = {
	layout: "main",
	title: "Home",
};

const intro = {
	one: "Hello there!",
	two: "My name is Igor"
};
const aboutTitle = {
	title: "About me",
	role: "I'm a Full stack developer",
	experince: {
		title: "I've worked with different technologies, such as ...",
		details: [
			"C#",
			"JavaScript",
			"TypeScript",
			"Angular",
			"React"
		]
	}
}

export default () => (
	<Layout className="home" title="Home">
		<link rel="stylesheet" href="./index.css" />
		<div className="animation-container">
			<div className="avatar-container fixed">
				<picture className="avatar animated animation-left-to-right">
					<img src="assets/avatar.jpg" alt="My avatar" />
				</picture>
				<h1 className="intro animated animation-appear" style={{"--animation-from": "0%", "--animation-to": "50%"}}>{intro.one}</h1>
				<h1 className="intro animated animation-appear" style={{"--animation-from": "50%", "--animation-to": "100%"}}>{intro.two}</h1>
			</div>
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
