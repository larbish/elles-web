import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import WeekendsStore from '~/store/weekends';

// eslint-disable-next-line import/no-mutable-exports
let weekendsStore: WeekendsStore;

const initialiseStores = (store: Store<any>): void => {
  weekendsStore = getModule(WeekendsStore, store);
};

export { initialiseStores, weekendsStore };
