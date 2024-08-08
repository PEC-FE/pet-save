import { useQuery } from '@tanstack/react-query';

import { getVolunteerList } from './getVolunteerList.api';
import { VOLUNTEER_KEYS } from './volunteerKeys';

export const useVolunteerListQuery = () =>
  useQuery({
    queryKey: VOLUNTEER_KEYS.lists(),
    queryFn: getVolunteerList,
  });
