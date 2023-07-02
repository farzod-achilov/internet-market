import axios from "axios";
import { useQuery } from "react-query";

function fetchCategories({ queryKey }) {
  const [, { limit }] = queryKey;
  return axios.get("https://api.escuelajs.co/api/v1/categories", {
    params: {
      limit,
    },
  });
}

export function useCategories({ limit }) {
  return useQuery({
    queryKey: ["https://api.escuelajs.co/api/v1/categories", { limit }],
    queryFn: fetchCategories,
  });
}
