describe('ui-marketing: HeroSimpleCentered component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosimplecentered--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
