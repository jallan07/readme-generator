// function to generate markdown for README
function generateMarkdown(data) {
	// Initialize the licenseBadge variable, and set it equal to an empty string
	let licenseBadge = "";
	// function to grab the correct badge for the selected license
	if (data.license === "MIT") {
		licenseBadge =
			"MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	} else if (data.license === "IPL 1.0") {
		licenseBadge =
			"IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
	} else if (data.license === "MPL 2.0") {
		licenseBadge =
			"MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
	} else if (data.license === "ODbL") {
		licenseBadge =
			"ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
	} else if (data.license === "PDDL") {
		licenseBadge =
			"ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
	} else if (data.license === "Perl") {
		licenseBadge =
			"Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
	}

	return `
  # **${data.title}**

  ---
  
  ## **Description**
  
  ${data.description}
  
  ---
  
  ## **Table of Contents**
  
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributions](#Contributions)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  7. [Author](#Author)
  
  ---
  
  ## **Installation**
  
  1. Clone the repo: _git clone ${data.repository}.git_
  
  2. Install NPM packages: _${data.installation}_
  
  ---
  
  ## **Usage**
  
  ${data.usage}
  
  ---
  
  ## **License**
  
  Distributed under the ${data.license} License.

  [![License: ${licenseBadge}

  ---
  
  ## **Contributions**
  
  **Current Contributors:**
  
  _${data.contributors}_
  
  Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
  
  ${data.contributions}
  
  ---
  
  ## **Tests**
  
  ---
  
  ## **Questions**
  
  ---
  
  ## **Author**
  
  - ${data.author}
  - ${data.email}
  - ${data.linkedin}
  
  `;
}

module.exports = generateMarkdown;
