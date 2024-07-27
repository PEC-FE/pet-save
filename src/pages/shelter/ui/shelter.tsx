import { ShelterList, useShelters } from '@/src/widgets/shelter';

export default function Shelter() {
  const { data: shelters } = useShelters();

  return (
    <div>
      <h1>보호소 페이지</h1>
      <ShelterList shelters={shelters} />
    </div>
  );
}
