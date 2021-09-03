describe('ui-marketing: HeaderSimple component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headersimple--primary&args=brand;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
