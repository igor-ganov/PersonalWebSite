import "./components/_greeting";

//click button
console.log("Hello World");

const button = document.getElementById("button");
button?.addEventListener("click", () => {
	alert("Hello World");
});
