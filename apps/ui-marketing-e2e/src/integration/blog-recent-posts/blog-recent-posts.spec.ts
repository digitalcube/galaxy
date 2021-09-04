describe('ui-marketing: BlogRecentPosts component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blogrecentposts--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-marketing!');
    });
});
