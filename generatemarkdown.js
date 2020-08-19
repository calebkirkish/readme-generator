// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  # Description
  ${data.description} 
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Tests
  ${data.tests}
  # license
  ${data.license}
  # Contributimg
  ${data.contributing}
  # Questions
  you can find my github profile here: ${data.username}. 
  If you haveany questions about my projects you can contact me: ${data.email}
    `;
  }
  
  module.exports = generateMarkdown;


