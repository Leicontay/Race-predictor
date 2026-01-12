import { useEffect, useState } from 'react';
import { fetchHollywoodbetsRaces } from './api/races';
import { Race } from './types/Race';
import RaceList from './components/RaceList';

export default function App() {
  const [races, setRaces] = useState<Race[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHollywoodbetsRaces()
      .then(setRaces)
      .catch(() =>
        setError('Failed to load Hollywoodbets Punters races')
      );
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Hollywoodbets Punters Races</h1>
      <RaceList races={races} />
    </div>
  );
}
