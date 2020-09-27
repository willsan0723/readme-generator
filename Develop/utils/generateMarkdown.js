// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## Table of Contents
  
`;
}

module.exports = generateMarkdown;
