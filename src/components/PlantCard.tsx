
export const PlantCard = ({ name, lastWateredAt }: { name: string; lastWateredAt?: string }) => (
  <div className="plant-container">
    <h3>{name}</h3>
    { lastWateredAt && <p>Last watered: {new Date(lastWateredAt).toLocaleDateString()}</p> }
  </div>
);