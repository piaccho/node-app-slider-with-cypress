describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Navigation Buttons Test', function () {
  it('Allows user to navigate slides using navigation buttons', function () {
    // Step 1: Open gallery page
    cy.visit('http://localhost:3000');
    
    // Verify first slide is Rome
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.wait(1000);
    // Step 2: Click next button and verify next slide is shown
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.wait(1000);
    // Step 3: Click previous button and verify previous slide is shown
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Slide Description Test', function () {
  it('Verifies each slide description is displayed correctly', function () {
    // Step 1: Open gallery page
    cy.visit('http://localhost:3000');
    cy.wait(1000);
    // Step 2 & 3: Check first slide (Rome, Italy)
    cy.get('.swiper-slide-active h1').should('be.visible').and('contain', 'Rome');
    cy.get('.swiper-slide-active p').should('be.visible').and('contain', 'Italy');
    cy.wait(1000);
    // Move to second slide
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active h1').should('be.visible').and('contain', 'London');
    cy.get('.swiper-slide-active p').should('be.visible').and('contain', 'United Kingdom');
    
  });
});

describe('Responsive Design Test', function () {
  const devices = [
    { name: 'desktop', width: 1200, height: 800 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 667 }
  ];
  
  devices.forEach((device) => {
    it(`Checks gallery responsiveness on ${device.name}`, function () {
      // Step 1: Open gallery with specific viewport
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');
      cy.wait(1000);
      // Step 2: Verify gallery adapts to screen size
      cy.get('.wrapper').should('be.visible');
      cy.get('.swiper').should('be.visible');
      cy.wait(1000);
      // Step 3: Verify navigation buttons are accessible
      cy.get('.swiper-button-next').should('be.visible').and('not.be.disabled');
      cy.get('.swiper-button-prev').should('be.visible').and('not.be.disabled');
      cy.wait(1000);
      // Check if navigation works
      cy.get('.swiper-button-next').click();
      cy.get('.swiper-slide-active').should('contain', 'London');
    });
  });
});

describe('Gallery Visibility Test', function () {
  it('Ensures all gallery elements are properly displayed', function () {
    // Step 1: Open gallery page
    cy.visit('http://localhost:3000');
    
    // Step 2: Check main container visibility
    cy.get('.wrapper').should('be.visible');
    cy.get('.swiper').should('be.visible');
    
    // Step 3: Verify all slides exist
    cy.get('.swiper-slide').should('have.length', 3);
    
    // Step 4: Verify navigation buttons are present and clickable
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
    
    // Check pagination is visible
    cy.get('.swiper-pagination').should('be.visible');
  });
});