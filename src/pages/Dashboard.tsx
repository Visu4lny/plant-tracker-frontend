import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { PlantList } from "../components/PlantList";
import type { Plant } from "../types";
import { useEffect, useState } from "react";
import { plantsApi } from "../api";
import { Modal } from "../components/Modal";
import { PlantForm } from "../components/PlantForm";

export const DashboardPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPlants = async () => {
    try {
      const plantsData = await plantsApi.getAll();
      setPlants(plantsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load plants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPlant = () => {
    setIsModalOpen(true)
  }

  const waterPlant = async (id: string) => {
    try {
      await plantsApi.updateLastWatered(id);
      fetchPlants();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to water plant');
    }
  }

  const deletePlant = async (id: string) => {
    try {
      await plantsApi.delete(id);
      fetchPlants();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete plant');
    }
  }

  const handleSuccess = () => {
    fetchPlants();
    setIsModalOpen(false);
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Plants</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="toolbar">
        <button onClick={addPlant}>Add Plant</button>
      </div>

      <main>
        {loading && <div>Loading plants...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <PlantList plants={plants} onWater={waterPlant} onDelete={deletePlant}/>}
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <PlantForm onSuccess={handleSuccess} />
      </Modal>

    </div>
  )
}
