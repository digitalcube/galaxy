describe('ui-marketing: Blog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blog--primary&args=pattern;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
