describe('ui-marketing: CTASimpleCentered component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ctasimplecentered--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
