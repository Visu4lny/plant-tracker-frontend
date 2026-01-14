import "./PlantList.css";
import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

interface PlantListProps {
  plants: Plant[];
  onWater: (id: string) => void;

}
export const PlantList = ({ plants, onWater }: PlantListProps) => {
  return (
    <div className="plantList-container">
      <ul>
        {plants.map(p => 
          <PlantCard 
            key={p.id}
            name={p.name}
            lastWateredAt={p.lastWateredAt}
            onWater={() => onWater(p.id)} 
          />)}
      </ul>
    </div>
  )
}
