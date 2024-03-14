const inquirer = require('inquirer');
const fs = require("fs")
/*A question object is a hash containing question related values:

type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
name: (String) The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).

*/
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type:"input",
       name:"name",
       message:"What is the developer name?" 
     },
    {
      type:"input",
      name:"title",
      message:"what is the project title?",
    },
    {
      type:"input",
      name:"email",
      message:"what is the developer email?",
    },
    {
      type:"input",
      name:"about",
      message:"what is the project description?",
    }
  
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    fs.writeFile("README.MD",`
    # ${answers.title}

    ${answers.brief}
    
    ## Table of Contents
    - [About](#about)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Features](#features)
    - [Contributing](#contributing)
    - [License](#license)
    - [Contact](#contact)
    
    ## About
    ${answers.about}
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Features
    ${answers.features}
    ## Contributing
    ${answers.contribute}
    ## License
    ${answers.license}
    ## Contact
    - **Developer:** [${answers.name}]
    - **Email:** [${answers.email}]
   
    `,()=>{

    });
  })
  .catch((error) => {
    console.log(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  ///promise