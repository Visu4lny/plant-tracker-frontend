import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { PlantList } from "../components/PlantList";
import type { Plant } from "../types";

export const DashboardPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const MOCK_PLANTS: Plant[] = [
    { id: '1', name: 'Basil', lastWateredAt: '2025-12-29T08:00:00Z' },
    { id: '2', name: 'Cactus'},
    { id: '3', name: 'Oleander', lastWateredAt: '2025-12-20'}
  ]

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Plants</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      
      <main>
        <PlantList plants={MOCK_PLANTS} />
      </main>
    </div>
  )
}