import "./PlantCard.css"

interface PlantCardProps {
  name: string;
  lastWateredAt?: string;
  onWater: () => void;
  onDelete: () => void;
}

export const PlantCard = ({ name, lastWateredAt, onWater, onDelete }: PlantCardProps) => (
  <div className="plant-container">
    <h3>{name}</h3>
    {lastWateredAt && <p>Last watered: {new Date(lastWateredAt).toLocaleDateString()}</p>}
    <div className="plant-toolbar">
      <button onClick={onWater}>Water</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  </div>
);
