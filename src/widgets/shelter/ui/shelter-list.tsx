import type { Shelter as TShelter } from '@/src/entities/shelter';

import Shelter from './shelter';

interface ShelterListProps {
  shelters: TShelter[];
}

export default function ShelterList({ shelters }: ShelterListProps) {
  return (
    <ul>
      {shelters.map((shelter) => (
        <Shelter key={shelter.id} {...shelter} />
      ))}
    </ul>
  );
}
