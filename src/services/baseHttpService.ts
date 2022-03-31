import BaseService from './baseService';
import ax, { AxiosInstance, AxiosRequestConfig } from 'axios';
import ToastService from './toastService';
import ToastTypeEnum from '../models/toastModels'

export default class BaseHttpService extends BaseService {
  private axios: AxiosInstance;

  constructor(private baseUrl: string, private toastProvider?: ToastService) {
    super();

    this.axios = ax.create({
    });

    this.axios.interceptors.response.use((response) => {
      // TODO: Intercept toast success message, and filter out data
      this.wrappedToast("Request successful");
      return response;
    }, (reject) => {
      // We failed. Grab respone code, message, and generate error toast

      // TODO: Why on earth is this necessary to get at the status???
      const json = JSON.parse(JSON.stringify(reject))
      const code = json.status;
      const message = reject.message;

      // Trigger the toast
      this.wrappedToast(`Error ${code}: ${message}`, ToastTypeEnum.alert);

      // Pass the promise back
      return Promise.reject(reject);
    })
  }

  public get(url: string, axiosOptions?: AxiosRequestConfig) {
    this.axios.get(url, axiosOptions);
  }

  public post(url: string, axiosOptions?: AxiosRequestConfig) {
    this.axios.post(url, axiosOptions);
  }

  public patch(url: string, axiosOptions?: AxiosRequestConfig) {
    this.axios.patch(url, axiosOptions);
  }

  public put(url: string, axiosOptions?: AxiosRequestConfig) {
    this.axios.put(url, axiosOptions);
  }

  public delete(url: string, axiosOptions?: AxiosRequestConfig) {
    this.axios.delete(url, axiosOptions);
  }

  public wrappedToast(message: string, type: ToastTypeEnum = ToastTypeEnum.info) {
    if (this.toastProvider != null) {
      this.toastProvider.addToast(message, 5000, type);
    }
  }
}