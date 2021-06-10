import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { FestivalWeekend } from '../models/weekends';
import { $strapi } from '~/utils/api';

@Module({
  name: 'weekends',
  stateFactory: true,
  namespaced: true,
})
export default class WeekendsStore extends VuexModule {
  weekends: FestivalWeekend[] = [];

  @MutationAction({ mutate: ['weekends'] })
  async fetchAll(): Promise<{ weekends: FestivalWeekend[] }> {
    const weekends = await $strapi.find('festival-weekends');
    return { weekends };
  }
}
