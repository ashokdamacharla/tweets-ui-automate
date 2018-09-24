// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("launchPage", () => { 
	cy.visit('/');
})

Cypress.Commands.add("loginUser", (email, password) => { 
	cy.get('.js-username-field').type(email);
  cy.get('.js-password-field').type(password);
	cy.get(':nth-child(3) > .submit').click();
})

Cypress.Commands.add("logoutUser", () => { 
  cy.get('#user-dropdown-toggle').click();
  cy.get('#signout-button > button').click();
})

Cypress.Commands.add("tweetText", (text) => {
  cy.get('#global-new-tweet-button').click();
  var elmTweetKey = '#Tweetstorm-tweet-box-0 > .tweet-box-content > .tweet-content > .RichEditor > .RichEditor-container > .RichEditor-scrollContainer > .tweet-box'
  cy.get(elmTweetKey).type(text)
  var elmSubmitKey = '#Tweetstorm-tweet-box-0 > .tweet-box-content > .TweetBoxToolbar > .TweetBoxToolbar-tweetButton > .buttons > .SendTweetsButton > .button-text'
  cy.get(elmSubmitKey).click()
})
