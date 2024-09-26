import { useQuery } from '@tanstack/react-query';

import { getVolunteer } from './getVolunteer.api';
import { VOLUNTEER_KEYS } from './volunteerKeys';

export const useVolunteerDetailQuery = (id: string) =>
  useQuery({
    queryKey: VOLUNTEER_KEYS.detail(id),
    queryFn: () => getVolunteer(id),
  });
