// function to generate markdown for README
function generateMarkdown(data) {
  // translate each license to be added as a badge
  if (data.license === "Apache") {
    var license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (data.license === "BSD3") {
    var license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (data.license === "MIT") {
    var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else {
    var license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }

  return `# ${data.title}
  ${license}
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub User Name: ${data.user}

  [GitHub Repository](https://github.com/${data.user}/)

  If you have any additional questions you can reach me at ${data.mail}
`;
}

module.exports = generateMarkdown;
