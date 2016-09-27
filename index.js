'use strict'

const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'list',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'v1',
      'v2',
      new inquirer.Separator(),
      'v3',
      'v4'
    ]
  }
]).then(function ({theme}) {
  if (theme === 'v1') {
    inquirer.prompt([
      {
        type: 'rawlist',
        name: 'size',
        message: 'What size do you need',
        choices: ['Jumbo', 'Large', 'Standard'],
        filter: function (val) {
          return val.toLowerCase();
        }
      }
    ]).then(function (answers) {
      console.log(JSON.stringify(answers, null, '  '));
    });
  } else {
    inquirer.prompt([
      {
        type: 'rawlist',
        name: 'size',
        message: 'What size do you need',
        choices: ['Medium', 'Small', 'Micro'],
        filter: function (val) {
          return val.toLowerCase();
        }
      }
    ]).then(function (answers) {
      console.log(JSON.stringify(answers, null, '  '));
    });
  }
});
