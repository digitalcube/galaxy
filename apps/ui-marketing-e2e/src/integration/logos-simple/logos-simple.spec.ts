describe('ui-marketing: LogosSimple component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logossimple--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
