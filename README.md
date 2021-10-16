
# team-profile-generator

Command-line tool that generates an HTML webpage to display summaries for each team members.

## Description

A CLI to build up a team profile for you next software project. This tool runs on NodeJS with the ```npm start``` command. Follow the prompts and fill out your Team's information starting with your Team Lead. The use of Inquirer made this tool easy to implement, allowing the user to enter their own information. After you've finished entering new teammates info, the page generates a new fully-styled HTML containing your team's info, and quick links for email and GitHub. Use this tool when starting your next project to keep your team members top of mind!

## Demo

## Installation and Usage

Clone [the repo](https://github.com/graybishop/team-profile-generator), then run ```npm install``` to download dependencies.

Run ```npm start``` in your terminal to start the tool. Follow the prompts for entering the Lead's info, then continue entering members' info as need. When you're done, tell the tool you have no more members to add:

```md
 ? Do you have more employees? (Y/n)
 // input 'n' or 'No'
```

It'll generate a new HTML file in the 'dist' directory. Copy that folder to anywhere on your machine for easy access.

## Testing

To perform unit tests run the command ```npm test```. This will start Jest, and run through the tests.

## Features

### Portable, Styled Page

The page comes pre-styled and the page (w/ style folder) can be moved to anywhere on your computer without issue.

### Unlimited Team Members

The tool can handle any number of team members. The HTML file will neatly list them all in order of entry.

## TechStack

* JavaScript
* Inquirer
* Jest
* Bootstrap/SASS
