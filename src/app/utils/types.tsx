export interface Payment {
  type: string;
  value: string;
}

export interface Data {
  /* table */
  order?: string;
  client?: string;
  total?: string;
  status?: string;
  orderDate?: string;
  deliveryDate?: string;
  biker?: string;

  /* route details */
  deliveryName?: string;
  pickupAddress?: string;
  deliveryAddress?: string;

  /* payment details */
  aditional?: string;
  payments?: Payment[];
}
