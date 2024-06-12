import Dot from "../assets/icons/Dot";

export const OrderStatus = [
  { label: "Solicitado", value: "Solicitado" },
  { label: "Atribuído", value: "Atribuído" },
  { label: "Suspenso/no aguardo", value: "Suspenso/no aguardo" },
  { label: "Em andamento", value: "Em andamento" },
  { label: "Concluído", value: "Concluído" },
  { label: "Cancelado", value: "Cancelado" },
];

export const PaymentType = ["Pix", "Depósito", "Transferência"];

export const DeliveryStatus = [
  {
    icon: <Dot color="#FFFF" />,
    label: "Aprovado",
    value: "Aprovado",
  },
  {
    icon: <Dot color="#10A74F" />,
    label: "Concluído",
    value: "Concluído",
  },
  {
    icon: <Dot color="#FFA800" />,
    label: "Em andamento",
    value: "Em andamento",
  },
  {
    icon: <Dot color="#D10F0F" />,
    label: "Suspenso",
    value: "Suspenso",
  },
];

export const OptionsStatus = [
  {
    icon: <Dot color="#10A74F" />,
    label: "Aprovado",
    value: "Aprovado",
  },
  {
    icon: <Dot color="#FFA800" />,
    label: "Em aprovação",
    value: "Em aprovação",
  },
  {
    icon: <Dot color="#D10F0F" />,
    label: "Cancelado",
    value: "Cancelado",
  },
];

export const AvailabilityType = [
  "Integral",
  "Todos os dias",
  "Manhã",
  "Tarde",
  "Noite",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sab",
  "Dom",
];
