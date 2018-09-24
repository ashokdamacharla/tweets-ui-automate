describe('Tweeter', () => {
    beforeEach(() => {
        
    }) 

    it('Fire Tweets', () => {
        cy.fixture('users.json').then((usersJson) => {
            cy.wrap(usersJson).each(usersMap => {
                cy.launchPage()
                cy.loginUser(usersMap['username'], usersMap['password'])
                cy.fixture('tweets.json').then((tweetsJson) => {
                    cy.wrap(tweetsJson).each(tweet => {
                        cy.log(tweet)
                        cy.tweetText(tweet);
                        cy.wait(3000)
                    })
                })
                cy.logoutUser();
            })
        })
        
    })
}) 