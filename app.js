const inquirer = require('inquirer');
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('Please enter your Githbu username!');
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
// promptUser().then(answers => console.log(answers));

// const promptProject = portfolioData => {
//   if (!portfolioData.projects) {
//   portfolioData.projects = [];
//   }
//   .then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(portfolioData);
//     } else {
//       return portfolioData;
//     }
//   });
const promptProject = () => {
console.log(`
=================
Add a New Project
=================
`)


  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: (projectInput) => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter the name of the project!');
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of the project!');
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log('Enter the Github link!');
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an About section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some informatoin about yourself:',
      when: ({confirmAbout}) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
      
    }
  ])
};


promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});








//  const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i +=1) {
//   console.log(profileDataArr[i]);
//   }
//   console.log('================');
//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };
// printProfileData(profileDataArgs) 