#!/usr/bin/env node

const commander = require("commander");
const inquirer = require("inquirer");
commander.version("1.0.0", "-v", "--version");
commander.command("init <name>").action((name)=>{
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "你叫什么名字"
    }
  ])
})
commander.parse(process.argv);
