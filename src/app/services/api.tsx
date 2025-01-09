import axios from "axios";
import { toast } from "react-toastify";
import {
  Biker,
  ClientRequest,
  ClientResponse,
  Itinerary,
  OrderTDO,
} from "../utils/types";

const apiHost = process.env.REACT_APP_API_HOST ?? "";
const baseURL = `${apiHost}/api/v1`;
export const api = axios.create({
  baseURL,
  headers: {},
});

export const brasilApi = axios.create({
  baseURL: "https://brasilapi.com.br/api/cep/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const orsKey =
  process.env.REACT_APP_ORS_API_KEY ??
  "5b3ce3597851110001cf62480b8b8b358d5c4620bf7332ac394cdda2";
export const openrouteserviceApi = axios.create({
  baseURL: `https://api.openrouteservice.org/geocode/search?api_key=${orsKey}&text=`,
  headers: {},
});

export const getOrder = async (): Promise<OrderTDO[]> => {
  try {
    const response = await api.get("/order");
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar pedido.");
    console.warn(err);
    return [];
  }
};

export const approveOrder = async (data: {
  id: string;
  approved: boolean;
}): Promise<boolean> => {
  try {
    await api.post("/admin/order/approve", data);
    toast.success("Seu pedido foi alterado com sucesso!");
    return true;
  } catch (err) {
    toast.error("Ops! Erro ao alterar pedido.");
    console.warn(err);
    return false;
  }
};

export const getBiker = async (): Promise<Biker[]> => {
  try {
    const response = await api.get("/biker");
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar biker.");
    console.warn(err);
    return [];
  }
};

export const createBiker = async (data: Biker): Promise<Biker> => {
  try {
    const response = await api.post("/biker", data);
    toast.success("Biker criada com sucesso!")
    return response?.data ?? {};
  } catch (err) {
    toast.error("Ops! Erro ao criar biker.")
    console.warn(err);
    return {};
  }
};

export const updateBiker = async (data: Biker): Promise<Biker> => {
  try {
    const response = await api.put("/biker", data);
    toast.success("Biker atualizada com sucesso!");
    return response?.data ?? {};
  } catch (err) {
    toast.error("Ops! Erro ao atualizar biker.");
    console.warn(err);
    return {};
  }
};

export const deleteBiker = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/biker/${id}`);
    toast.success("Biker excluída com sucesso!");
    return true;
  } catch (err) {
    toast.error("Ops! Erro ao excluir biker.");
    console.warn(err);
    return false;
  }
};
export const getClient = async (): Promise<ClientResponse[]> => {
  try {
    const response = await api.get("/client");
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar cliente.");
    console.warn(err);
    return [];
  }
};

export const updateClient = async (
  data: ClientRequest
): Promise<ClientResponse> => {
  try {
    const response = await api.put("/client", data);
    toast.success("Cliente atualizado com sucesso!");
    return response?.data ?? {};
  } catch (err) {
    toast.error("Ops! Erro ao atualizar cliente.");
    console.warn(err);
    return {};
  }
};

export const deleteClient = async (id: string): Promise<boolean> => {
  try {
    await api.delete("/client", { data: { id } });
    toast.success("Cliente excluído com sucesso!");
    return true;
  } catch (err) {
    toast.error("Ops! Erro ao excluir cliente.");
    console.warn(err);
    return false;
  }
};

export const getItinerary = async (): Promise<Itinerary[]> => {
  try {
    const response = await api.get("/itinerary");
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar itinerário.");
    console.warn(err);
    return [];
  }
};

export const getItineraryByOder = async (
  orderId: string
): Promise<Itinerary[]> => {
  try {
    const response = await api.get(`/itinerary/?orderId=${orderId}`);
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar itinerário.");
    console.warn(err);
    return [];
  }
};

export const getItineraryByBiker = async (
  bikerId: string
): Promise<Itinerary[]> => {
  try {
    const response = await api.get(`/itinerary/?bikerId=${bikerId}`);
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar itinerário.");
    console.warn(err);
    return [];
  }
};

export const getItineraryByBikerAndOrder = async (
  bikerId: string,
  orderId: string
): Promise<Itinerary[]> => {
  try {
    const response = await api.get(
      `/itinerary/?bikerId=${bikerId}&orderId=${orderId}`
    );
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Não foi possível carregar itinerário.");
    console.warn(err);
    return [];
  }
};

export const updateItinerary = async (
  data: Itinerary
): Promise<Itinerary[]> => {
  try {
    const response = await api.put("/itinerary", data);
    toast.success("Itinerário atualizado com sucesso!");
    return response?.data ?? [];
  } catch (err) {
    toast.error("Ops! Erro ao atualizar itinerário.");
    console.warn(err);
    return [];
  }
};
export const login = async (user: {
  email: string;
  password: string;
}): Promise<{ accessToken?: string; refreshToken?: string }> => {
  try {
    const response = await api.post("/admin/login", user);
    return response?.data;
  } catch (err) {
    toast.error("Ops! Não foi possível efetuar login.");
    console.warn(err);
    return {};
  }
};
