import type { Plant, PlantInput } from "../types";
import api from "./client";

export const plantsApi = {
  getAll: () => api.get<Plant[]>('/plants'),

  create: (plant: PlantInput) =>
    api.post<Plant>('/plants', plant),

  updateLastWatered: (id: string) =>
    api.patch<Plant>(`/plants/${id}/last-watered`),

  delete: (id: string) =>
    api.delete(`/plants/${id}`)
}