# Vue.js Portfolio Template

## Live Demo

Disclaimer: This is not the real Bob Ross. Duh.

## Description

This is a developer portfolio template built with Vue.JS. Knowledge of Vue is not required to use this template! Simply follow these instructions to properly populate your data.

Mobile-responsive & SEO friendly!

## Install

- Fork the repo
- Clone the new repo to your machine
- run npm i to install dependencies
- run npm run serve to start the development server
- view your portfolio at http://localhost:8080

## Populating Data

### META

uncommment

Title

### Images

All images can be found in src/assets/images
Be sure to keep the same filename and extension:

- Replace header-background.jpg with a large hero image
- recommended size
- Replace profile-pic.png with a photo of you for the About section
  -recommnded size

In the portfolio folder, add photos to represent your projects.

- name the filename related to your project
- use a recommended aspect ratio of 5:3

#### Favicon

You can add a favicon.ico in the /public directory
instructions for generating a favicon

### Content

All content is populated via /src/data/data.json

The majority of the properties should be self-explanatory. I have outlined some details below.

#### Main

- "titles" - refers to the typewriter effect in the hero. Enter an unlimited amount of strings in the array.

- "headings" - these populate the h1 for each section.

#### About

- "about.facts" - this is an array of objects. You can enter an unlimited amount of items here, with the recommended max being 6. These populate as list items in the about section.

#### Skills

- "defaultCategory" - This is the skill category that will display when the page loads. This must match one of the categories listed exactly. There should not be duplicate categories.

- "categories"
- "category" - h2 heading
- "subtitle" - h3 heading
- "faClass" - add classes for a Font Awesome icon to represent the category
- "bullets" - OPTIONAL. Add an array of strings that will display as list items.

-"skillsList" - these populate as "skill bars". enter a "name" for the skill and a "level" - a value of 0-100 that represents the width the bar will be filled for each skill.

Reccommended max: 4 skills in the skill list.

Note - you can include "bullets" and/or skills in the "skillList" to represent your skill category.

It is recommended to do one or or the other in order to keep the section a consistent size as the full viewport.

Tip: The skill names are rendered via HTML. You could group similar skills together and separate them with an HTML entity.

Example: "'Javascript &bull; jQuery'"

#### Portfolio

"defaultFilter" - similar concept to the default category in the skills section. This will be the category of projects displayed by default.

##### Projects

"type" - intended to designation "group" or "individual" projects

- "image" - ensure this filename/extension mataches exactly the image to use from src/assets/images/portfolio
- "link" - The main link to the project, such as the live demo
- "source" - OPTIONAL. include the source code to the project
- "filter"

#### Contact

- "resumeLink" - This is where the resume link will go. Recommended to use a PDF, such as a view only link to Google Drive.
- "social" - social accounts are an array of objects to produce icons that link to your social accounts.

IMPORTANT SETUP: IN ORDER FOR THE CONTACT FORM TO WORK.

Because this is a static website, we use a third party to handle form requests.

There can be many ways to do this, but below is how I set it up on my personal portfolio.

Go to https://app.99inbound.com/
Create a free account (note: use the email you want to receive contact messages to to sign up as you cannot change this after creating your account)
Go to Forms > New Form
Build out your form
Recommended to use Name, Email, and Message fields
Go to Publish
Under the "Embed in your website section"
Copy the provided div ONLY
The script is already included in the index.html file
Go to /src/pages/Contact.vue
Replace the contact form with the provided div

## Styling

This project uses SASS / SCSS.

In src/styles/scss, there are a number of .scss files related to various components.

files with "\_" in front of them are ignored by the scss compiler

all of the files appended with "\_" are imported into the main.scss files.

In a terminal instance, you can run npm run sass to watch for changes to scss files

These get compiled into src/styles/css/main.css which is where the site css comes from

In the \_variables files, you can edit the colors for the themes.

## SEO

- it is important to name your files a relevant filename (such as your portfolio images)
- ensure images (other than the hero) do not exceed 1000px. Slow load times impact SEO rankings.

- lighthouse report

## Deploy

## Credits

- Bootstrap
- 99inbound
- Vue.JS
- SASS
- This codepen to highligh active navbar items
- typewriter effect -https://www.jasondavies.com/wordcloud/

I spent a lot of time on this project and would love if you kept credit to me in the footer. If not, no hard feelings.

## License

## Feedback?

Please be sure you've followed the instructions in this README.

If something you've populated in data.json doesn't look quite right, please let me know so I can fix it! I am happy to work with you to make it look right.

If you have contructive feedback for how I can improve this template, please also let me know!

hello@dariannocera.com
https://www.github.com/darnocer
https://www.linkedin.com/in/darian-nocera
https://www.dariannocera.com
