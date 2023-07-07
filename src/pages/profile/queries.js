import axios from "axios";

import { useQuery } from "react-query";

function getIdFromStorege() {
  try {
    const id = JSON.parse(localStorage.getItem("id"));

    return id;
  } catch (error) {
    console.log(error);
  }
}

const id = getIdFromStorege();

function fetchUser({ queryKey }) {
  const [, { limit }] = queryKey;
  return axios.get(`https://api.escuelajs.co/api/v1/users/${id}`, {
    params: {
      limit,
    },
  });
}

export function useUser({ limit }) {
  return useQuery({
    queryKey: [`https://api.escuelajs.co/api/v1/users/${id}`, { limit }],
    queryFn: fetchUser,
  });
}
