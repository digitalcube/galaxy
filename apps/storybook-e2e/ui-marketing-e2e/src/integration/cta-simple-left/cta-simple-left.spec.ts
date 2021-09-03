describe('ui-marketing: CTASimpleLeft component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ctasimpleleft--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
