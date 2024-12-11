export default class BasePage {
    // Common methods for all pages
    visit() {
      cy.visit('/');
    }
  
    getElement(selector) {
      return cy.get(selector);
    }
  
    clickElement(selector) {
      this.getElement(selector).click();
    }
  }
