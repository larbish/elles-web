import { getModule } from 'vuex-module-decorators';
import { Store } from 'vuex';
import WeekendsStore from '~/store/weekends';

// eslint-disable-next-line import/no-mutable-exports
export let weekendsStore: WeekendsStore;

// Init weekend store module
const initializeStores = (store: Store<any>): void => {
  weekendsStore = getModule(WeekendsStore, store);
};

// Fetch weekends globally and set it in store
export const actions = {
  async nuxtServerInit() {
    await weekendsStore.fetchAll();
  },
};

export const plugins = [initializeStores];
