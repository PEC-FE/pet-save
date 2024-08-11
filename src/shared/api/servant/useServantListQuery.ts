import { useQuery } from '@tanstack/react-query';

import { getServantList } from './getServantList.api';
import { SERVANT_KEYS } from './servantKeys';

export const useServantListQuery = () =>
  useQuery({
    queryKey: SERVANT_KEYS.lists(),
    queryFn: getServantList,
  });
