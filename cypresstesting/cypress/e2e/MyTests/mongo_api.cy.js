const url = 'http://localhost:3000/dashboard';
let rowid;
describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Visit the URL', () => {
        cy.visit(url);
        cy.url().should('eq', url);
        cy.get('#MongoTable').should('length', 0);
    });

    //Check if Delete Button Works
    it('Check Delete Row Button', () => {
      cy.visit(url);
      cy.url().should('eq', url);

      //Click Delete Button
      
  });
});
