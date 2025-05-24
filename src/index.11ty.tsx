import Layout from "./_includes/layout/Layout";

export const data = {
	layout: "main",
	title: "Home",
};

export default () => (
	<Layout title="Home">
		<link rel="stylesheet" href="./index.css" />
		<h1 className="title">Hello World</h1>
		<button id="button">Click me</button>
		<script src="./index.js"></script>
	</Layout>
);
