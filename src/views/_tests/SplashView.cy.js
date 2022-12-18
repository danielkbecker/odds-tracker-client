import SplashView from '../SplashView.vue';

describe('<PageNotExist />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(SplashView);
  });
});
