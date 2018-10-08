context('Home Page', () => {

    it('should pass 508 compliance', (done) => {
        cy.visit('http://localhost:4200');
        // navigate to the page you want to test
        cy.contains('hone').click();
        // test accessibility
        cy.checkAccessibility(done);
    });
});
