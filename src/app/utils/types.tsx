interface DeliveryTime {
  id: string;
  period: string;
  description: string;
  isSpecial: boolean;
  isExtraordinary: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductType {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Address {
  address?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  complement?: string;
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
}

interface Contact {
  name?: string;
  phone?: string;
}

export interface Biker {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  address?: Address;
  contact?: Contact;
  maxChargeableDistance?: number;
  maxDistance?: number;
  maxVolume?: number;
  maxWeight?: number;

  zipCode?: string;
  phone?: string;
}

export interface BikerTDO extends Biker {
  zipCode?: string;
  phone?: string;
}

export interface ClientRequest {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface ClientResponse {
  id?: string;
  name?: string;
  email?: string;
  contact?: Contact;
}

export interface DeliveryRequest extends Address {
  name?: string;
  phone?: string;
  addressNumber?: number;
  comments?: string;
}

export interface DeliveryResponse {
  deliveryNumber?: number;
  address?: Address;
  contact?: Contact;
}

export interface OrderRequest {
  deliveryDate?: string;
  deliveryTime?: string;
  productType?: string;
  weight?: number;
  rainyDelivery?: boolean;
  concierge?: boolean;
  waitingTime?: number;
  comments?: string;
  distance?: number;
  approved?: boolean | null;
}

export interface OrderResponse {
  id?: string;
  deliveryTime?: DeliveryTime;
  productType?: ProductType;
  distance?: number;
  weight?: number;
  rainyDelivery?: boolean;
  concierge?: boolean;
  waitingTime?: number;
  comments?: string;
  price?: number | null;
  approvedClient?: boolean;
  approved?: boolean | null;
}

export interface PickupRequest extends Address {
  name?: string;
  phone?: string;
  addressNumber?: number;
  comments?: string;
}

export interface PickupResponse {
  pickupNumber?: number;
  address?: Address;
  contact?: Contact;
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

export interface Itinerary {
  id?: string;
  status?: string | null;
  biker?: Biker;
  client?: ClientResponse;
  delivery?: DeliveryResponse;
  pickup?: PickupResponse;
  order?: OrderResponse;
}

export interface ItineraryTDO extends Itinerary {
  bikerId?: string;
  bikerName?: string;
}


export interface OrderTDO {
  id?: string;
  client?: ClientRequest;
  pickup?: PickupRequest[];
  delivery?: DeliveryRequest[];
  order?: OrderRequest;
  returnToOrigin?: boolean;
  totalPrice?: number;
  breakdown?: {
    basePrice: number;
    returnToOriginCharge: number;
    totalPrice: number;
    waitingTimeCharge: number;
  };
}

export interface OrderFormTDO extends OrderTDO {
  clientName?: string;
  clientContact?: string;
  deliveryDate?: string;
  orderStatus?: string;
  itineraryStatus?: string;
  itineraryId?: string;
  bikerId?: string;
  bikerName?: string;
}

export interface ItineraryFormTDO extends ItineraryTDO {
  clientName?: string;
  clientContact?: string;
  itineraryId?: string;
  bikerId?: string;
  bikerName?: string;
  totalPrice?: number;
  orderStatus?: string;
  deliveryDate?: string;
}
