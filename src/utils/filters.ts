import { Race } from '../types/Race';

export function hollywoodbetsPuntersOnly(races: Race[]): Race[] {
  return races.filter(r =>
    r.meeting.toLowerCase().includes('hollywoodbets')
  );
}
