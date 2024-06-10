import { Form } from "./types";

export const MockRows: Form[] = [
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
