import { Race } from '../types/Race';

export default function RaceList({ races }: { races: Race[] }) {
  return (
    <ul>
      {races.map(race => (
        <li key={race.id}>
          <strong>{race.meeting}</strong> – Race {race.raceNumber}
          <ul>
            {race.runners.map(horse => (
              <li key={horse}>{horse}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
