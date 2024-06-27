const {Given, Then, And} = require('@badeball/cypress-cucumber-preprocessor');

Given("Navigate to the website", () => {
    cy.visit("https://www.google.com")
})

Then("Type any word in the text field", () => {
    cy.get(".gLFyf").type("AI")
})

Then("Click the search button", () => {
    cy.get(".gNO89b").last().click({force: true})
})