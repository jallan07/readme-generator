// Variable declarations and package dependencies/requirements
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");

// Promisify the writeFile function and store it within a variable called "writeFileAsync"
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is your first and last name?",
			name: "author",
		},
		{
			type: "input",
			message: "What is your email address?",
			name: "email",
		},
		{
			type: "input",
			message: "What is the URL of your LinkedIn profile?",
			name: "linkedin",
		},
		{
			type: "input",
			message: "What is the name of your project?",
			name: "title",
		},
		{
			type: "input",
			message: "Please write a 2-3 sentence description of the project.",
			name: "description",
		},
		{
			type: "input",
			message: "What is the URL of the project's github repository?",
			name: "repository",
		},
		{
			type: "input",
			message: "What usage information would you like to include?",
			name: "usage",
		},
	]);
}

// function to initialize program
async function init() {
	try {
		// store the user answers in a variable called data
		const data = await promptUser();
		// store the dynamically-created markup in a variable called markup
		const markup = generateMarkdown(data);
		// write README file using the dynamically-created markup stored in the markup variable
		await writeFileAsync("README.md", markup);
	} catch (err) {
		// if an error, log the error to the console
		console.log(err);
	}
}

// function call to initialize program
init();
