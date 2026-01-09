import "./PlantList.css";
import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

interface PlantListProps {
  plants: Plant[];
  onWaterPlant: (id: string) => void;

}
export const PlantList = ({ plants, onWaterPlant }: PlantListProps) => {
  return (
    <div className="plantList-container">
      <ul>
        {plants.map(p => <PlantCard key={p.id} onWaterPlant={() => onWaterPlant(p.id)} {...p} />)}
      </ul>
    </div>
  )
}
