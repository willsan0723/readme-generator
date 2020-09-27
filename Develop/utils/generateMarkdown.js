// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## Table of Contents
  
`;
}
// badge for license and explanation
module.exports = generateMarkdown;
