import BaseService from './baseService';
import ToastTypeEnum from '../models/toastModels';

export default class ToastService extends BaseService {
  protected toastListeners: any[] = [];

  constructor () {
    super();
  }

  public addToastListener (listener: any) {
    this.toastListeners.push(listener);
  }

  public addToast (message: string, duration = 5000, type: ToastTypeEnum = ToastTypeEnum.info) {
    this.toastListeners.forEach((listener) => {
      listener(message, duration, type);
    })
  }
}