#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const chalk = require('chalk')
const log =  console.log

const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'React',
    'Node JS',
    'Git',
    'Redux',
    'Firebase'
]

const Jobs = [
    {
        title: 'Consultant, UI/UX designer nad frontend developer',
        description:'Design interfaces and concepts for websites, make wireframes and prototypes, website development and ecommerce.',
        company: 'TECHNO LABS',
        country: 'Bogota-Colombia',
        beginDate: 'MAR 2018',
        endDate: 'DEC 2018'
    },
    {
        title: 'Lead UI/UX designer and lead frontend developer',
        description:`Project management, design interfaces and concepts for websites and apps, make wirefrimes and prototypes frontend for websites.`,
        company: 'BARTECH',
        country: 'Lima-Peru',
        beginDate: 'MAR 2018',
        endDate: 'OCT 2018'
    },
    {
        title: 'Professor',
        description:`Teacher in the courses of graphic design and environmental design, giving mainly the chairs of web design, editorial design and typography.`,
        company: 'CIDIG',
        country: 'Barquisimeto-Venezuela',
        beginDate: 'FEB 2017',
        endDate: 'MAY 2018'
    },
    {
        title: 'UI Developer',
        description:`Design websites and apps UI, Html and CSS layout, frontend with React, firebase.`,
        company: 'Smartkode',
        country: 'Puebla-Mexico',
        beginDate: 'MAR 2019',
        endDate: 'SEP 2019'
    },
    {
        title: 'Chief Product Designer',
        description:`Lead of design, marketing and frontend deparment, initilice project, choose tecnologies, review design a marketing strategies,like to code when I can t.t `,
        company: 'Smartkode',
        country: 'Puebla-Mexico',
        beginDate: 'SEP 2019',
        endDate: 'PRESENT'
    }
]

yargs(hideBin(process.argv))
    .command('skills', 'Show thomasnrggo skills', (yargs) => {
        return yargs
    }, (argv) => {
        log('-----------------------------------------------')
        log(chalk.yellow(`NRGGO skills are:`))
        log('-----------------------------------------------')
        skills.forEach(skill => (
            log(`- ${chalk.greenBright(`${skill}`)}`)
        ))
    })
    .command('jobs', 'Show nrggos jobs', (yargs) => {
        return yargs
    }, (argv) => {
        log('-----------------------------------------------')
        log(chalk.blueBright(`Here's NRGGO experience:`))
        log('-----------------------------------------------')
        Jobs.forEach(job => {
            log(`\n${chalk.yellow(`${job.title}`)} at ${chalk.cyan(`${job.company}`)}(${chalk.redBright(`${job.country}`)}) since ${chalk.greenBright(`${job.beginDate}`)} until ${chalk.greenBright(`${job.endDate}`)}`)
            log(`${job.description}`)
        })
    })
    .argv