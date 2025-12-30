import "./PlantList.css";
import type { Plant } from "../types";
import { PlantCard } from "./PlantCard";

export const PlantList = ({ plants }: { plants: Plant[]}) => {
  // const [plantsData, setPlantsData] = useState([
  //   {
  //     "id": "1",
  //     "name": "oleadner",
  //     "lastWateredAt": ""
  //   }
  // ]);

  // const plants = plantsData.map(plant =>
  //   <li key={plant.id}>
  //     <p>{plant.name}</p>
  //     {plant.lastWateredAt !== "" && <p>{plant.lastWateredAt}</p>}
  //   </li>
  // )

  return (
    <div className="plantList-container">
      <ul>
        {plants.map(p => <PlantCard key={p.id} {...p} />)}
      </ul>
    </div>
  )
}