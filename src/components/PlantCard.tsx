import "./PlantCard.css"

interface PlantCardProps {
  name: string;
  lastWateredAt?: string;
  onWater: () => void;
}

export const PlantCard = ({ name, lastWateredAt, onWater }: PlantCardProps) => (
  <div className="plant-container">
    <h3>{name}</h3>
    {lastWateredAt && <p>Last watered: {new Date(lastWateredAt).toLocaleDateString()}</p>}
    <div className="plant-toolbar">
      <button onClick={onWater}>Water</button>
    </div>
  </div>
);
