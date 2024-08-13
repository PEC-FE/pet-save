import { useState, useEffect } from 'react';

import { Shelters } from '@/src/entities';
import { mapToShelters } from '@/src/shared/api/shelter/mapToShelters';

import { mockData } from '@/app/shelters/__mockData__';

const getShelters = () => {
  return mockData;
};

export const useShelterList = () => {
  const [sheltersData, setSheltersData] = useState<Shelters | null>(null);

  useEffect(() => {
    const apiResponse = getShelters();
    const mappedData: Shelters = mapToShelters(apiResponse);
    setSheltersData(mappedData);
  }, []);

  return { sheltersData };
};
