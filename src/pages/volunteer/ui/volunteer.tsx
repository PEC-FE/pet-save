import { VolunteerAddButton, VolunteerFilter } from '@/src/features/volunteer';
import { useVolunteers, VolunteerList } from '@/src/widgets/volunteer';

export default function VolunteerPage() {
  // filter state를 이용하여 봉사활동 데이터 fetching
  const { data: volunteers } = useVolunteers();

  return (
    <div>
      <VolunteerFilter />
      <VolunteerList volunteers={volunteers} />
      <VolunteerAddButton />
    </div>
  );
}
