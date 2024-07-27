import Volunteer from './volunteer';
import { Volunteer as TVolunteer } from '@/src/entities/volunteer';

interface VolunteerListProps {
  volunteers: TVolunteer[];
}

export default function VolunteerList({ volunteers }: VolunteerListProps) {
  return (
    <ul>
      {volunteers.map((volunteer) => (
        <Volunteer key={volunteer.id} {...volunteer} />
      ))}
    </ul>
  );
}
