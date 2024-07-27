import { ShelterFilter } from '@/src/features/shelter';
import { ShelterList, useShelters } from '@/src/widgets/shelter';

export default function Shelter() {
  // useShelters에 filter값을 넣어서 data fetching
  const { data: shelters } = useShelters();

  return (
    <div>
      <h1>보호소 페이지</h1>
      <ShelterFilter />
      <ShelterList shelters={shelters} />
    </div>
  );
}
