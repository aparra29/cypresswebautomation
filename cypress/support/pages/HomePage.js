import BasePage from './BasePage';

class HomePage extends BasePage {
    
    selectors = {
      carouselNext: '.carousel-control-next',
      carouselPrev: '.carousel-control-prev',
      carouselSlides: '.carousel-item',
      categoryMenu: '#itemc',
      headerLinks: {
        home: 'li.nav-item:nth-child(1) > a:nth-child(1)',
        contact: '[data-target="#exampleModal"]',
        aboutUs: '[data-target="#videoModal"]',
        cart: '#cartur',
        login: '#login2',
        signup: '#signin2'
      },
      productCategories: {
        phones: 'a[onclick="byCat(\'phone\')"]',
        laptops: 'a[onclick="byCat(\'notebook\')"]',
        monitors: 'a[onclick="byCat(\'monitor\')"]'
      },
      logo: '.navbar-brand'
    }
  
    clickNextCarouselButton() {
      this.getElement(this.selectors.carouselNext).click();
    }
  
    clickPreviousCarouselButton() {
      this.getElement(this.selectors.carouselPrev).click();
    }
  
    getCarouselSlides() {
      return this.getElement(this.selectors.carouselSlides);
    }
  
    selectCategory(category) {
      switch(category.toLowerCase()) {
        case 'phones':
          this.getElement(this.selectors.productCategories.phones).click();
          break;
        case 'laptops':
          this.getElement(this.selectors.productCategories.laptops).click();
          break;
        case 'monitors':
          this.getElement(this.selectors.productCategories.monitors).click();
          break;
        default:
          throw new Error(`Category ${category} not found`);
      }
    }
  
    clickHeaderLink(linkName) {
      const linkSelector = this.selectors.headerLinks[linkName.toLowerCase().replace(' ', '')];
      if (!linkSelector) {
        throw new Error(`Link ${linkName} not found in header`);
      }
      this.getElement(linkSelector).click();
    }
  
    verifyHeaderLinks() {
      const links = Object.values(this.selectors.headerLinks);
      links.forEach(selector => {
        cy.get(selector)
          .should('be.visible')
          .and('not.be.disabled');
      });
    }
  }
  export const homePage = new HomePage();
  