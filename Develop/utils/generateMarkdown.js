// function to generate markdown for README
function generateMarkdown(data) {
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
