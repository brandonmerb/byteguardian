enum ToastTypeEnum {
  alert = "error",
  info = "primary",
  warning = "warning",
  progress = "success",
}

export interface ToastResponse {
  message: string;
  type: ToastTypeEnum;
}

export default ToastTypeEnum;