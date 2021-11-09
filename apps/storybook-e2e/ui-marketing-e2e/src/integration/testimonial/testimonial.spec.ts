describe('ui-marketing: Testimonial component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testimonial--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
