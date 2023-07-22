import axios from 'axios';
import queryString from 'query-string';
import { CarSharingInterface, CarSharingGetQueryInterface } from 'interfaces/car-sharing';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarSharings = async (
  query?: CarSharingGetQueryInterface,
): Promise<PaginatedInterface<CarSharingInterface>> => {
  const response = await axios.get('/api/car-sharings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCarSharing = async (carSharing: CarSharingInterface) => {
  const response = await axios.post('/api/car-sharings', carSharing);
  return response.data;
};

export const updateCarSharingById = async (id: string, carSharing: CarSharingInterface) => {
  const response = await axios.put(`/api/car-sharings/${id}`, carSharing);
  return response.data;
};

export const getCarSharingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/car-sharings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarSharingById = async (id: string) => {
  const response = await axios.delete(`/api/car-sharings/${id}`);
  return response.data;
};
