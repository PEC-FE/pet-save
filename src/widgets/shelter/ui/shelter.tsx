import type { Shelter as TShelter } from '@/src/entities/shelter';

type ShelterProps = TShelter;

export default function Shelter({ id }: ShelterProps) {
  return <div>{id}</div>;
}
