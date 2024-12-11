import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { homePage } from '../pages/HomePage';

Given('I am on a different page', () => {
  homePage.visit();
  cy.get('.card-title').first().click();
});

When('I click on the {string} header link', (linkName) => {
  homePage.clickHeaderLink(linkName);
});

When('I attempt to click all header links', () => {
  homePage.verifyHeaderLinks();
});

When('I click on the website logo', () => {
  homePage.getElement(homePage.selectors.logo).click();
});

Then('I should be redirected to the correct {string} page', (pageTitle) => {
  cy.contains(pageTitle).should('be.visible');
});


Then('all links should be clickable', () => {
  homePage.verifyHeaderLinks();
})

Then('I should be redirected to the homepage', () => {
  cy.contains("PRODUCT STORE").should('be.visible');
})
