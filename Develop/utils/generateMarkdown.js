// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
// function for badges for license
// translate each and export value as a variable to be added near top of readme
module.exports = generateMarkdown;
