import DashboardView from '../DashboardView.vue';

describe('<DashboardView />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(DashboardView);
  });
});
