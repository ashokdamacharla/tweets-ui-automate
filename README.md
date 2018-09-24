# tweets-ui-automate
Tweet the all the tweets provided in tweets.js for the users given in users.js, with Cypress.js UI automation.

## Getting Started

### Prerequisites
Install Node.js

### Setup
Clone this repository.
```
git clone https://github.com/ashokdamacharla/tweets-ui-automate.git
```
Go to "tweets-ui-automate" folder in command prompt to this automation.

#### Install dependencies
Install Cypress.io.
```
npm install cypress
```
### Tweets data setup
* [Update the tweets as JSON array in cypress/fixtures/tweets.js ]
* [Update the list of users in cypress/fixtures/users.js]

### Run the Atumation
Headless mode: Run the below command (Preferred)
```
./node_modules/.bin/cypress run
```

Heade mode: Run the below command (Only when you want to view it in browser or to debug)
```
./node_modules/.bin/cypress open
```
and click on .js file to launch testcases.

Note: You can verify /cypress/video/ folder for a video, when you run in Healess mode, to view how the automation ran.
