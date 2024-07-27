import { useVolunteers, VolunteerList } from '@/src/widgets/volunteer';

export default function VolunteerPage() {
  const { data: volunteers } = useVolunteers();

  return (
    <div>
      <VolunteerList volunteers={volunteers} />
    </div>
  );
}
