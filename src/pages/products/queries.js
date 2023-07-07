import axios from "axios";
import { useQuery } from "react-query";

function fetchProducts({ queryKey }) {
  const [, { limit }] = queryKey;
  return axios.get("https://api.escuelajs.co/api/v1/products", {
    params: {
      limit,
    },
  });
}

export function useProducts({ limit }) {
  return useQuery({
    queryKey: ["https://api.escuelajs.co/api/v1/products", { limit }],
    queryFn: fetchProducts,
  });
}
