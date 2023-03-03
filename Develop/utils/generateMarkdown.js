// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "MOZILLA"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if(license === "GNU"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if(license === "None")
    return `N/A`
  // Rinse repeat
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  # Table of Contents
1. [License](#license)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
  ## license
  ${renderLicenseBadge(answers.license)}
  ${answers.license}
  ## description
  ${answers.description}
  ## installation
  ${answers.install}
  ## usage
  ${answers.use}
  ## contributing
  ${answers.authors}
  ## tests
  ${answers.test}
  ## questions
  "Below is listed my contact information and github profile if you have further questions."

  [${answers.userName} on GitHub](https://github.com/${answers.userName})
  
  ${answers.email}
`;
}

module.exports = generateMarkdown;
