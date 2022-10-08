import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
// const inquirer = require("inquirer");
// const open = require("open");
// const fs = require('fs');
// const request = require('request');
// const path = require('path');
// const ora = require('ora');
// const cliSpinners = require('cli-spinners');
clear();

// const prompt = inquirer.createPromptModule();

// const questions: Array<ObjectType> = [
//   {
//     type: "list",
//     name: "action",
//     message: "What you want to do?",
//     choices: [
//       {
//         name: `Send me an ${chalk.green.bold("email")}?`,
//         value: () => {
//           open("mailto:singhvaibhavofficial@gmail.com");
//           console.log("\nDone, see you soon at inbox.\n");
//         },
//       },
//       //   {
//       //     name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
//       //     value: () => {
//       //       // cliSpinners.dots;
//       //       const loader = ora({
//       //         text: " Downloading Resume",
//       //         spinner: cliSpinners.material,
//       //       }).start();
//       //       let pipe = request("<Link to resume>").pipe(
//       //         fs.createWriteStream("./vaibhav-resume.html")
//       //       );
//       //       pipe.on("finish", function () {
//       //         let downloadPath = path.join(process.cwd(), "vaibhav-resume.html");
//       //         console.log(`\nResume Downloaded at ${downloadPath} \n`);
//       //         open(downloadPath);
//       //         loader.stop();
//       //       });
//       //     },
//       //   },
//       //   {
//       //     name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
//       //     value: () => {
//       //       open("https://calendly.com/vaibhavsinghh/15min");
//       //       console.log("\n See you at the meeting \n");
//       //     },
//       //   },
//       {
//         name: "Just quit.",
//         value: () => {
//           console.log("Hasta la vista.\n");
//         },
//       },
//     ],
//   },
// ];

const data = {
  name: chalk.bold.green("                   Vaibhav Singh"),
  handle: chalk.white("@mistervaibhav"),
  work: `${chalk.white("Software Engineer at")} ${chalk
    .hex("#fa5762")
    .bold("Fashinza")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("vaibhavsinghhhh"),
  github: chalk.gray("https://github.com/") + chalk.green("mistervaibhav"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("mistervaibhav"),
  npx: chalk.red("npx") + " " + chalk.white("mistervaibhav"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
// const tip = [
//     `Tip: Try ${chalk.cyanBright.bold(
//         "cmd/ctrl + click"
//     )} on the links above`,
//     '',
// ].join("\n");
// console.log(tip);

// prompt(questions).then(answer => answer.action());
