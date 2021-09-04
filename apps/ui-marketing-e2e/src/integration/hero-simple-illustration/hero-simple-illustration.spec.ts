describe('ui-marketing: HeroSimpleIllustration component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=herosimpleillustration--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
