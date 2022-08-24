import { useQuery } from "react-query";
import { api } from ".";

export const getHello = () => api.get("/").then(({ data }) => data);

export const useHello = () => useQuery("/", getHello);
