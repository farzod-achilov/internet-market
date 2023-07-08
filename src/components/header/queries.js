import axios from "axios";
import { useQuery } from "react-query";

function fetchSearch({ queryKey }) {
  const [, { limit, title, price_min, price_max }] = queryKey;
  return axios.get(`https://api.escuelajs.co/api/v1/products/`, {
    params: {
      limit,
      title,
      price_min,
      price_max,
    },
  });
}

export function useSearch({ limit, title, price_min, price_max }) {
  return useQuery({
    queryKey: [
      `https://api.escuelajs.co/api/v1/products/`,
      { limit, title, price_min, price_max },
    ],
    queryFn: fetchSearch,
  });
}
