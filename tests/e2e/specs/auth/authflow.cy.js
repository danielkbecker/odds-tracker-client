// https://docs.cypress.io/api/table-of-contents

describe('Login Flow', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Splash page has correct content', () => {
    cy.visit('/');
    cy.contains('label', 'Email:');
    cy.contains('label', 'Password:');
    cy.contains('a', 'Login');
    cy.contains('a', 'Sign Up');
  });
  it('Logging in pushes user to /dashboard', () => {
    // Visit here?
    cy.get('input[name=emailLogin]').type(Cypress.env('username'));
    cy.get('input[name=passwordLogin]').type(Cypress.env('password')).type('{enter}');
    cy.url().should('include', '/dashboard');
  });
  it('Reloading the page keeps the user logged in', () => {
    // Visit here?
    cy.reload();
    cy.url().should('include', '/dashboard');
  });
  it('After a user is logged in, they cannot navigate back to login page without logging out', () => {
    // Visit here?
    cy.visit('/');
    cy.url().should('include', '/dashboard');
  });
});
