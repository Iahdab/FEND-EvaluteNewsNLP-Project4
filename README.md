
# Project Evaluate News NLP 
***4th Project for [UDACITY](UDACITY.com) NanoDegree*** 

## Table of Contents

- [Overview](#Overview)
- [GettingStarted](#GettingStarted)
   - [Functionality](#Functionality)
   - [File](#File)
   - [CloningRepo](#CloningRepo)
   - [SetUpProject](#SetUpProject)
   - [RunningProject](#RunningProject)
   - [Dependencies](#Dependencies)
- [Deploying](#Deploying)

## Overview

build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.
Following are the project prerequisites:
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using Webpack, we will set up the app to have dev and prod environments, each with its own set of tools and commands.
- External script - Service Worker
- External API - Meaning Cloud 

## GettingStarted

 ### Functionality
 
 ### File
 
   - package-lock.json
   - package.json
   - webpack.dev.js
   - webpack.prod.js
   - .babelrc
   - .gitignore
   - **SRC Folder**
     - **Client Folder**
       - index.js
       - **JS Folder**
         - formhandler.js
         - **Test Folder**
           - all tests are in this folder
       - **View Folder**
         - index.html
       - **Style Folder**
         - all SCSS styles are in this folder
     - **Server Folder**
       - index.js 
 
 ### CloningRepo
 
  - **Clone In Terminal:**\
    ```git clone https://github.com/Iahdab/Fend-Evalute-Nlp-project4.git```
     OR
  - **Clone In VS code Command Palette:**\
    ```>Git: Colne  https://github.com/Iahdab/Fend-Evalute-Nlp-project4.git```
  - ***NOTE: also you can fetch or Download it as a zip file.***

 ### SetUpProject
 
 - **In terminal/vs code install these dependencies**
     - ``` npm install ```
 - **In the project, you must have Key from [MeaningCloud](https://www.meaningcloud.com/) for the project to run**
     - in my project, I used a .env file and add the key, and installed  
         - ``` npm install dotenv ```
     - in .env file add your Meaning Cloud API KEy as : 
         - ``` API_KEY=************************** ``` 
 
 ### RunningProject
 
 - **To run the Project:**
   - *Open 3 Terminal in VS Code:*
      - Terminal 1: to start
        - ``` npm start ```
      - Terminal 2:to run in development mode
        - ``` npm run build-dev ```
      - Terminal 3: to run in production mode (to build dist folder)
        - ``` npm run build-prod ```
      - Terminal 4(optional): to run test
        - ``` npm test ```
   - *Lastly, run the project on http://localhost:8080/ or http://127.0.0.1:8080 on web-browser*

 ### Dependencies 
 
  - **Dependency used in project "Package.Json":**
    babel, babel-loader, css-loader, file-loader, html-loader, html-webpack-plugin,
    node-sass, sass-loader, style-loader, webpack, webpack-cli, and webpack-dev-server
 
## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
