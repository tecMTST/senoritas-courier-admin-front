import { Biker, Form } from "./types";

export const MockSingleDelivery: Form[] = [
  {
    code: "#202403001",
    route: "#001",
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
    biker: "Jacira Sousa",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403002",
    route: "#002",
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
    biker: "Helenice",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403003",
    route: "#003",
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
    biker: "Marite",
    createdAt: "13/03/2023",
  },
  {
    code: "#202403004",
    route: "#004",
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
    biker: "Joaquim",
    createdAt: "13/03/2023",
  },
];

export const MockBikers: Biker[] = [
  {
    name: "Jacira Sousa",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Integral",
  },
  {
    name: "Helenice",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Integral",
  },
  {
    name: "Marite",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Seg-Qui",
  },
  {
    name: "Joaquim",
    zipCode: "030646-020",
    status: "Ativo",
    availability: "Qua-Sab",
  },
];

export const MockOrders = [
  {
    itinerary: "Roteiro #2",
    clientName: "Laura Rodrigues",
    total: 100.0,
    deliveryDate: "16/03/2023",
  },
  {
    itinerary: "Roteiro #6",
    clientName: "Gilberto Santos",
    total: 200.0,
    deliveryDate: "20/03/2023",
  },
];

export const MockClients = [
  {
    client: "Empresa A",
    contact: "Laura Rodrigues",
    address: "Rua Joerg Bruder, 181  -  Vila Sao Francisco",
    zipCode: "04710-200",
  },
  {
    client: "Empresa B",
    contact: "Carlos Oliveira",
    address: "Rua São Ticiano, 88  -  Vila Formosa",
    zipCode: "03360-070",
  },
  {
    client: "Empresa C",
    contact: "Natália Vaz",
    address: "Rua Doutor Alvino Lima, 8  -  Paraíso",
    zipCode: "04103-040",
  },
  {
    client: "Empresa D",
    contact: "Luisa Santos",
    address: "Rua Curuzu, 156 - Lapa",
    zipCode: "05084-020",
  },
];
