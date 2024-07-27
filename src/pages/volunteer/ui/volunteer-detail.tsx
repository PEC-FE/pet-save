import { VolunteerDetail } from '@/src/widgets/volunteer';
import { useVolunteer } from '@/src/widgets/volunteer/lib/useVolunteer';

type VolunteerDetailPageProps = {
  id: number;
};

export default function VolunteerDetailPage({ id }: VolunteerDetailPageProps) {
  const { data: volunteer } = useVolunteer(id);

  return (
    <div>
      <VolunteerDetail {...volunteer} />
    </div>
  );
}
