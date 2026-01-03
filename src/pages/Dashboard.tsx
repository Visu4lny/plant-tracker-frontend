import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { PlantList } from "../components/PlantList";
import type { Plant } from "../types";
import { useEffect, useState } from "react";
import { plantsApi } from "../api";

export const DashboardPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await plantsApi.getAll();
        setPlants(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load plants');
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Plants</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      
      <main>
        {loading && <div>Loading plants...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <PlantList plants={plants} />}
      </main>
    </div>
  )
}