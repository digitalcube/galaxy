describe('ui-marketing: CTA component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cta--primary&args=pattern;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
