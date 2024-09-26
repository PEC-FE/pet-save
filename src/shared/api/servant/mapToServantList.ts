import { Servant } from '../../types';

export const mapToServantList = (servantList: Servant[]) =>
  servantList.map((servant) => ({
    id: servant.id,
    shelterId: servant.shelter_id,
    name: servant.name,
    description: servant.description,
    imageUrl: servant.image_url,
    date: servant.date,
    status: servant.status,
  }));
