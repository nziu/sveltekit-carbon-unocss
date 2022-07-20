export interface Response<T> {
  statusCode: number;
  message: string;
  data?: T;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface Profile {
  id: number;
  username: string;
  role: 'USER' | 'ADMIN';
}

export interface Shop {
  id: number;
  name: string;
  realtime: Data;
  history: Data;
  createdAt: string;
  updatedAt: string;
}

interface Data {
  laborMap: number;
  laborUserMap: number;
  satisfactionMap: number;
  dissatisfactionMap: number;
  threeMinResponseConMap: number;
  avgResponseDurationMap: string;
}
