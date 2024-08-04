// FIXME-cch: mockData
import { Shelters } from '../../src/entities/shelter/model/shelter';
import { mapToShelters } from '../../src/shared/api/shelter/mapToShelters';

import { mockData } from './__mockData__';

const getShelters = () => {
  return mockData;
};

const SheltersPage = () => {
  const apiResponse = getShelters();

  const sheltersData: Shelters = mapToShelters(apiResponse);

  return (
    <div>
      <h1>Shelters</h1>
      <ul>
        {sheltersData.shelters.map((shelter) => (
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
        <div>totalCount: {sheltersData.pagination.totalCount}</div>
        <div>currentPage: {sheltersData.pagination.currentPage}</div>
        <div>pageSize: {sheltersData.pagination.pageSize}</div>
      </ul>
    </div>
  );
};

export default SheltersPage;
