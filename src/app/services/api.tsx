import axios from "axios";

const apiHost = process.env.REACT_APP_API_HOST ?? "";
const baseURL = `${apiHost}/api/v1`;
export const api = axios.create({
  baseURL,
  headers: {},
});

export const getForm = async (): Promise<any[]> => {
  try {
    const response = await api.get("/form");
    return response?.data ?? [];
  } catch (err) {
    console.warn(err);
    return [];
  }
};
