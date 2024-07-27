import { ShelterDetail, useShelter } from '@/src/widgets/shelter';

type ShelterDetailPage = {
  id: number;
};

export default function ShelterDetailPage({ id }: ShelterDetailPage) {
  const { data: shelter } = useShelter(id);

  return (
    <div>
      <ShelterDetail {...shelter} />
    </div>
  );
}
