#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

// Text + chalk definitions
const data = {
    name: chalk.white("             René Logala Modia"),
    handle: chalk.white("logmodia"),
    work: chalk.white("Junior web developer at BeCode"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~logmodia"),
    github: chalk.gray("https://github.com/") + chalk.green("logmodia"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("rené-logala-modia-036a51130"),
    web: chalk.cyan("https://logmodia.me"),
    npx: chalk.red("npx") + " " + chalk.white("logmodia"),
    labelWork: chalk.white.bold(" Work     :"),
    labelNpm: chalk.white.bold(" npm      :"),
    labelGitHub: chalk.white.bold(" GitHub   :"),
    labelLinkedIn: chalk.white.bold(" LinkedIn :"),
    labelWeb: chalk.white.bold(" Web      :"),
    labelCard: chalk.white.bold(" Card     :"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";
const underline = "            ------------------------------";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                underline,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                titleAlignment: "center",
                title: "Npx Card",
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);