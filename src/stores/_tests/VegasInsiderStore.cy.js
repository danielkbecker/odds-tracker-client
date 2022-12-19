import { setActivePinia, createPinia } from 'pinia';
import { useVegasInsiderStore } from '../VegasInsiderStore';

describe('Vegas Insider Store', () => {
  beforeEach(() => { setActivePinia(createPinia()); });
  it('properly fetches tables in database', () => {
    const vegasInsiderStore = useVegasInsiderStore();
    // eslint-disable-next-line no-unused-expressions
    expect(vegasInsiderStore.tables).to.equal(null);
    // IDK how to do this.
    // vegasInsiderStore.fetchTablesFromBackend();
    // expect(vegasInsiderStore.tables.length).to.be.at.least(4);
  });
});
