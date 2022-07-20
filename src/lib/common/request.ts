import { getItem, removeItem, setItem } from '$lib/common';
import type { Response, Token } from '$lib/types';
import _axios from 'axios';
import { goto } from '$app/navigation';

const API_URL = import.meta.env.VITE_API_URL;

export const axios = _axios.create({
  baseURL: API_URL,
  timeout: 3 * 1000
});

axios.interceptors.request.use(
  (config) => {
    const token: Token = getItem('token');
    if (token) {
      config.headers = config.headers ?? {};
      config.headers['authorization'] = `Bearer ${token.access_token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },

  async (error) => {
    const { response, config } = error;

    if (response && response.status === 401) {
      try {
        await refresh_token();
        return axios(config);
      } catch (_error) {
        removeItem('token');
        goto('/login');
        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  }
);

async function refresh_token() {
  const { refresh_token }: Token = getItem('token');
  const response = await _axios.post<Response<Token>>(
    `${API_URL}/auth/refresh`,
    {
      refresh_token
    }
  );
  const { data: token } = response.data;
  setItem('token', token);
}
