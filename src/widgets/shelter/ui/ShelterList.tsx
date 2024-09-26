import { Shelter, Shelters } from '@/src/entities';

interface ShelterListProps {
  shelters: Shelter[];
  totalCount: number;
  currentPage: number;
  pageSize: number;
}

export const ShelterList = (props: ShelterListProps) => {
  return (
    <div>
      <h2>Shelters</h2>
      <ul>
        {props.shelters.map((shelter) => (
          <li key={shelter.name}>
            <hr />
            <p>{shelter.name}</p>
            <p>{shelter.type}</p>
            <p>{shelter.animalType}</p>
            <p>{shelter.address}</p>
            <p>{shelter.phoneNumber}</p>
            <p>{shelter.operatingHours}</p>
            <hr />
          </li>
        ))}
      </ul>
      <div>totalCount: {props.totalCount}</div>
      <div>currentPage: {props.currentPage}</div>
      <div>pageSize: {props.pageSize}</div>
    </div>
  );
};
