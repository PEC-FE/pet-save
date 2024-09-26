import type { Volunteer } from '@/src/shared/types';
import { generateRandomVolunteer } from '@/src/shared/utils';

export const getVolunteer = (id: string): Promise<Volunteer> =>
  new Promise((resolve) => {
    const response = {
      ...generateRandomVolunteer(),
      id,
    };
    resolve(response);
  });
