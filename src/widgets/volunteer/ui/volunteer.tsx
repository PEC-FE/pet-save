import { Volunteer as TVolunteer } from '@/src/entities/volunteer';

type VolunteerProps = TVolunteer;

export default function Volunteer({ id }: VolunteerProps) {
  return <div>{id}</div>;
}
