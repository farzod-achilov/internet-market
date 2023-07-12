import axios from "axios";
import { useQuery } from "react-query";

function fetchProducts({ queryKey }) {
  var id = JSON.parse(sessionStorage.getItem("categoriesId"));
  if (id === null) {
    id = 1;
  }
  const [, { limit }] = queryKey;
  return axios.get(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`,
    {
      params: {
        limit,
      },
    }
  );
}

export function useProducts({ limit }) {
  var id = JSON.parse(sessionStorage.getItem("categoriesId"));
  if (id === null) {
    id = 1;
  }
  return useQuery({
    queryKey: [
      `https://api.escuelajs.co/api/v1/categories/${id}/products`,
      { limit },
    ],
    queryFn: fetchProducts,
  });
}

function fetchProduct({ queryKey }) {
  var id = JSON.parse(sessionStorage.getItem("productId"));
  const [, { limit }] = queryKey;
  return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`, {
    params: {
      limit,
    },
  });
}

export function useProduct({ limit }) {
  var id = JSON.parse(sessionStorage.getItem("productId"));
  return useQuery({
    queryKey: [`https://api.escuelajs.co/api/v1/products/${id}`, { limit }],
    queryFn: fetchProduct,
  });
}

function fetchSimilarProducts({ queryKey }) {
  var id = sessionStorage.getItem("similarId");
  if (id === null) {
    id = 1;
  }
  const [, { limit }] = queryKey;
  return axios.get(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`,
    {
      params: {
        limit,
      },
    }
  );
}

export function useSimilarProducts({ limit }) {
  var id = sessionStorage.getItem("similarId");
  if (id === null) {
    id = 1;
  }
  return useQuery({
    queryKey: [
      `https://api.escuelajs.co/api/v1/categories/${id}/products`,
      { limit },
    ],
    queryFn: fetchSimilarProducts,
  });
}
