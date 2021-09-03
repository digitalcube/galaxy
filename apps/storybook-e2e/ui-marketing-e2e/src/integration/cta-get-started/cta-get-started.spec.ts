describe('ui-marketing: CtaGetStarted component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ctagetstarted--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
