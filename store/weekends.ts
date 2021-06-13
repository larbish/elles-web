import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import axios from 'axios';
import { FestivalWeekend } from '../models/weekends';
import { strapiBaseUri } from '~/nuxt.config';
// import { $strapi } from '~/utils/api';

@Module({
  name: 'weekends',
  stateFactory: true,
  namespaced: true,
})
export default class WeekendsStore extends VuexModule {
  weekends: FestivalWeekend[] = [];

  @MutationAction({ mutate: ['weekends'] })
  async fetchAll(): Promise<{ weekends: FestivalWeekend[] }> {
    const res = await axios.get(`${strapiBaseUri}/festival-weekends?_sort=startDate:ASC`);
    return { weekends: res.data };
  }
}
