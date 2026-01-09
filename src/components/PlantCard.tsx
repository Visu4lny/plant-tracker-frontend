import "./PlantCard.css"

interface PlantCardProps {
  name: string;
  lastWateredAt?: string;
  onWaterPlant: () => void;
}

export const PlantCard = ({ name, lastWateredAt, onWaterPlant }: PlantCardProps) => (
  <div className="plant-container">
    <h3>{name}</h3>
    {lastWateredAt && <p>Last watered: {new Date(lastWateredAt).toLocaleDateString()}</p>}
    <div className="plant-toolbar">
      <button onClick={onWaterPlant}>Water</button>
    </div>
  </div>
);
