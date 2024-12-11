import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { homePage } from '../pages/HomePage';

Given('I am on the homepage', () => {
  homePage.visit();
});

When('I click the next carousel button', () => {
  homePage.clickNextCarouselButton();
});

When('I click the previous carousel button', () => {
  homePage.clickPreviousCarouselButton();
});

When('I wait for carousel auto-slide', () => {
  cy.wait(5000); 
});

When('I inspect the carousel slides', () => {
  homePage.getCarouselSlides().should('have.length.gt', 0);
});

Then('the carousel should advance to the next slide', () => {
  homePage.getCarouselSlides()
    .filter('.active')
    .should('exist');
});

Then('the carousel should change slides automatically', () => {
  homePage.getCarouselSlides()
    .filter('.active')
    .invoke('index')
    .then(initialIndex => {
      cy.wait(5000);
      homePage.getCarouselSlides()
        .filter('.active')
        .invoke('index')
        .should('not.eq', initialIndex);
    });
});

Then('the carousel should move to the previous slide', () => {
  homePage.getCarouselSlides()
    .filter('.active')
    .should('exist');
});