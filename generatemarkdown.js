// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [license](#license)
- [Contributing](#contributing)
- [Questions](#questions)
# Description
  ${data.description} 
# Installation
  ${data.installation}
# Usage
  ${data.usage}
# Tests
  ${data.tests}
# license
  #### ${data.license}
  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-darkgreen.svg)](http://www.wtfpl.net/about/)
# Contributing
  ${data.contributing}
# Questions
  #### you can find my github profile here: ${data.username}
  #### If you haveany questions about my projects you can contact me: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;


