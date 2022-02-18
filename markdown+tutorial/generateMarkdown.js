function generateMarkdown(data) {
    return `

# ${data.title}

# License
    This document is licensed under ${data.license}
 ![git lic](http://img.shields.io/badge/license-${data.license}-red)

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#test)
- [Questions](#question)
    
# Description
    ${data.description}
    
# Installation
    ${data.installation}
    
# Usage
    ${data.usage}
    
# Contributions
    ${data.contributions}
    
# Test
    This is the following link to test ${data.test}
    
# Question
    If you have any questions or issues feel free to contact me at ${data.question} or ${data.email}

    ` 
}
    
    module.exports = generateMarkdown;
