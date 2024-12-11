export default class BasePage {
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
