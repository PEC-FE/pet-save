import type { Volunteer } from '@/src/shared/types';
import { generateVolunteers } from '@/src/shared/utils';

export const getVolunteerList = (): Promise<Volunteer[]> =>
  new Promise((resolve) => {
    const response = generateVolunteers(10);
    resolve(response);
  });
