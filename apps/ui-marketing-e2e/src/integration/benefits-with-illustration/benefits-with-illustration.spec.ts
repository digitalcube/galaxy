describe('ui-marketing: BenefitsWithIllustration component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=benefitswithillustration--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
