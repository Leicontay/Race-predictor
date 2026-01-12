import { Race } from '../types/Race';

export function hollywoodbetsOnly(races: Race[]): Race[] {
  return races.filter(r =>
    r.meeting.toLowerCase().includes('hollywoodbets')
  );
}
