import type { Plant, PlantInput } from "../types";
import api from "./client";

export const plantsApi = {
  getAll: (): Promise<Plant[]> => 
    api.get<Plant[]>('/plants') as unknown as Promise<Plant[]>,

  create: (plant: PlantInput): Promise<Plant> =>
    api.post<Plant>('/plants', plant) as unknown as Promise<Plant>,

  updateLastWatered: (id: string): Promise<Plant> =>
    api.patch<Plant>(`/plants/${id}/last-watered`) as unknown as Promise<Plant>,

  delete: (id: string): Promise<void> =>
    api.delete(`/plants/${id}`) as unknown as Promise<void>
}