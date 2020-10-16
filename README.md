# Human Rights First: Police Brutality Across America

You can find the deployed project at [Human Rights First - Police Brutality Across America](https://main.d17v0exvwwwzgz.amplifyapp.com/).

## Contributors

|                                                      [Matthew Molloy](https://github.com/)                                                       |                                                       [Jason Schwartz](https://github.com/)                                                        |                                                      [Emilio Diaz-Goico](https://github.com/)                                                       |                                                       [Steele Helbling](https://github.com/)                                                        |     |                                                 
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/ESZCHB482-W012H6TKTBP-791655a057b9-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012QNY40TW-13608abc8792-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012JQ52B0B-dbe5d49f721f-512" width = "200" />](https://github.com/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RSMJQP-dd8a48c8def2-512" width = "200" />](https://github.com/) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "0" />](https://github.com/) |
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)                           |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)                            |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                |

<br>
<br>


## Project Overview

[Trello Board](https://trello.com/b/QWXanExQ/team-c-2009)

[Technical Architecture and Userflow](https://whimsical.com/8sQcpjw3K2XdAiM9aeMkft)

Our team is developing an interactive map that identifies instances of police use of force across the United States of America for Human Rights First, an independent advocacy and action organization.

### Key Features

- User can view incidents of police brutality and get more information on specific incidents
- User can seearch map based on type of force, location, and date 

## 1️⃣ Tech Stack

### Data Science API built using:

#### _Data Science goes here_

🚫 Why did you choose this framework?

- Works well with FastAPI
- Recommended to us
- Wanted to learn an in-demand framework

🚫List the rest of the data science features and libraries in the same format as the framework above.

- Pandas
- scikit-learn
- spacy
- nltk
- PRAW
- Tweepy

#### Data Science API deployed to AWS

#### [Back end](🚫link to back end repo here) built using:

#### 🚫 back end framework goes here (link to BE REPO)

- point one
- point two
- point three

🚫 List the rest of the back end end features and libraries in the same format as the framework above

# APIs

## 2️⃣ Data Science API

We are sending json objects to the backend with information about instances of police use of force. This information includes location data (city, state, and geocode) and relevant details about the incident, like the type of force that was used.

## 2️⃣ PRAW

PRAW, The Python Reddit API Wrapper, makes it easy for users to analyze Reddit data. We used PRAW to scrape Reddit for potential instances of police of force.

## 3️⃣ Tweepy

Tweepy is a Python library that allows users to access the Twitter API. We used Tweepy to scan Twitter to find instances of police use of force.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_MAPBOX_TOKEN=

# Testing

No testing implemented as of October 16th, 2020. 

# Installation Instructions

Run 'npm install' to install all necessary dependencies. 

## Other Scripts

    * node server.js - must be executed from /server folder - runs local server for development 

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/Labs27-C-HRF-BE) for details on the backend of our project.
