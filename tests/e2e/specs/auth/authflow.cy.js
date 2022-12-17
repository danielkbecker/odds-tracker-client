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
  it('User who is not logged in cannot get to dashboard', () => {
    cy.visit('/dashboard');
    cy.url().should('not.contain', '/dashboard');
  });

  it('User who is not logged in cannot get to unused route and they are redirected to login page', () => {
    cy.visit('/foo');
    cy.url().should('not.contain', '/foo');
    cy.contains('label', 'Email:');
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
  it('After a user is logged in, if they try to navigate to a route that does not exist, they will get the PageNotExist view', () => {
    // Visit here?
    cy.visit('/foo');
    cy.contains('h1', 'Oops this page does not exist.');
  });
  it('If a user is on PageNotExist view and they click on the back button, they will be taken back to the last page they were at.', () => {
    // Visit here?
    cy.get('button[id="backbtn"]').click();
    cy.url().should('include', '/dashboard');
  });
});
