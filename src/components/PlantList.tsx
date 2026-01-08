import "./PlantList.css";
import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

export const PlantList = ({ plants }: { plants: Plant[]}) => {
  return (
    <div className="plantList-container">
      <ul>
        {plants.map(p => <PlantCard key={p.id} {...p} />)}
      </ul>
    </div>
  )
}