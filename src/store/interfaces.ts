export interface IState {
  isLoading: boolean;
}

export interface IFormState {
  isSending: boolean;
  isLoad: boolean;
}

export interface IHotelState {
  hotel: object;
}

export interface IHotelsState {
  hotels: Array<object>;
}

export interface IModalState {
  isVisible: boolean;
}

export interface INotificationState {
  isShown: boolean;
}
