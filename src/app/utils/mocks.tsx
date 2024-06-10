import { Biker, Form } from "./types";

export const MockSingleDelivery: Form[] = [
  {
    code: "#202403001",
    client: {
      name: "Bruna Queiroz",
    },
    estimatedAmounts: {
      totalPrice: 65.43,
      mainPrice: 50.43,
    },
    order: {
      deliveryDate: "18/03/2023",
    },
    status: "Solicitado",
    biker: "Biker A",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403002",
    client: {
      name: "Luísa Santos",
    },
    estimatedAmounts: {
      totalPrice: 65.43,
      mainPrice: 50.43,
    },
    order: {
      deliveryDate: "18/03/2023",
    },
    status: "Atribuído",
    biker: "Biker B",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403003",
    client: {
      name: "Carla Pereira",
    },
    estimatedAmounts: {
      totalPrice: 65.43,
      mainPrice: 50.43,
    },
    order: {
      deliveryDate: "18/03/2023",
    },
    status: "Suspenso",
    biker: "Biker C",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403004",
    client: {
      name: "Janna Ortega",
    },
    estimatedAmounts: {
      totalPrice: 65.43,
      mainPrice: 50.43,
    },
    order: {
      deliveryDate: "18/03/2023",
    },
    status: "Em andamento",
    biker: "Biker D",
    createdAt: "13/03/2023",
  },
];

export const MockOptionsBikers = [
  { label: "Biker A", value: "Biker A" },
  { label: "Biker B", value: "Biker B" },
  { label: "Biker C", value: "Biker C" },
  { label: "Biker D", value: "Biker D" },
  { label: "Biker E", value: "Biker E" },
];

export const MockBikers: Biker[] = [
  {
    _id: "1",
    name: "Jacira Sousa",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Integral",
  },
  {
    _id: "2",
    name: "Helenice",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Integral",
  },
  {
    _id: "3",
    name: "Marite",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Seg-Qui",
  },
  {
    _id: "4",
    name: "Joaquim",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Qua-Sab",
  },
];  
