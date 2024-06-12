export interface Payment {
  type?: string;
  value?: string;
} // TODO

export interface Client {
  name?: string;
  email?: string;
  phone?: string;
}

export interface Pickup {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  neighborhood?: string;
  addressNumber?: number;
  complement?: string;
  zipCode?: string;
  geolocation?: string;
  comments?: string;
}

export interface Delivery {
  name?: string;
  phone?: string;
  address?: string;
  neighborhood?: string;
  addressNumber?: number;
  complement?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  comments?: string;
  geolocation?: string;
  return?: boolean;
}

export interface Order {
  deliveryDate?: string;
  deliveryTime?: string;
  productType?: string;
  weight?: number;
  rainyDelivery?: boolean;
  concierge?: boolean;
  waitingTime?: number;
  distance?: number;
  comments?: string;
  status?: string; // TODO
}

export interface EstimatedAmounts {
  id?: string;
  distancePrice?: number;
  weightPrice?: number;
  mainPrice?: number;
  weekendPrice?: number;
  deliveryTimeSpecial?: number;
  deliveryTimeExtraordinary?: number;
  municipalityPrice?: number;
  rainPrice?: number;
  conciergePrice?: number;
  totalPrice?: number;
}

export interface Form {
  _id?: string;
  code?: string; // TODO
  route?: string; // TODO
  status?: string; // TODO
  biker?: string; // TODO
  createdAt?: string; // TODO
  client?: Client;
  pickup?: Pickup;
  delivery?: Delivery;
  order?: Order;
  estimatedAmounts?: EstimatedAmounts;
}

export interface FormTDO extends Form {
  /* table */
  clientName?: string;
  total?: number;
  deliveryDate?: string;

  /* payment details */
  payment?: {
    status?: string;
    payments?: Payment[];
  };
}

export interface Biker {
  _id?: string;
  photo?: string;
  name?: string;
  phone?: string;
  description?: string;
  address?: string;
  neighborhood?: string;
  addressNumber?: number;
  complement?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  comments?: string;
  localization?: string;
  status?: string;
  availability?: string;
}
