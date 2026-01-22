import "./PlantList.css";
import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

interface PlantListProps {
  plants: Plant[];
  onWater: (id: string) => void;
  onDelete: (id: string) => void;
}

export const PlantList = ({ plants, onWater, onDelete }: PlantListProps) => {
  return (
    <div className="plantList-container">
      <ul>
        {plants.map(p => 
          <PlantCard 
            key={p.id}
            name={p.name}
            lastWateredAt={p.lastWateredAt}
            onWater={() => onWater(p.id)} 
            onDelete={() => onDelete(p.id)} 
          />)}
      </ul>
    </div>
  )
}
