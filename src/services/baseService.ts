import {Store} from 'vuex'
import {MainApplicationState} from '../store/index';

export default class BaseService {
  protected store: Store<MainApplicationState> | null;

  constructor () {
    this.store = null;
  }

  public setStore(newStore: Store<MainApplicationState>) {
    this.store = newStore;
    return this;
  }

  public getStore(): Store<MainApplicationState> | null {
    return this.store;
  }
}