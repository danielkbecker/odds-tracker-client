import { setActivePinia, createPinia } from 'pinia';
import { useLoadingIndicatorStore } from '../LoadingIndicatorStore';

describe('Loading Indicator Store', () => {
  beforeEach(() => { setActivePinia(createPinia()); });
  it('toggles loading state while properly using loading counter', () => {
    const loadingIndicator = useLoadingIndicatorStore();
    expect(loadingIndicator.isLoading).to.equal(false);
    expect(loadingIndicator.refCount).to.equal(0);
    loadingIndicator.loading(true);
    expect(loadingIndicator.isLoading).to.equal(true);
    expect(loadingIndicator.refCount).to.equal(1);
  });
});
