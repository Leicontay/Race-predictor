import { Race } from '../types/Race';
import { hollywoodbetsOnly } from '../utils/filters';

export async function fetchHollywoodbetsRaces(): Promise<Race[]> {
  const response = await fetch(
    'https://example-api.com/races/today'
  );

  if (!response.ok) {
    throw new Error('API failed');
  }

  const data: Race[] = await response.json();

  const filtered = hollywoodbetsOnly(data);

  if (filtered.length === 0) {
    throw new Error('No Hollywoodbets races found');
  }

  return filtered;
}
