import PageNotExist from '../PageNotExist.vue';

describe('<PageNotExist />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(PageNotExist);
  });
});
