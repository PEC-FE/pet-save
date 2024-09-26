import Chance from 'chance';

import { Servant, ServantStatus } from '../../types/servant';

const chance = new Chance();

const STATUS = Object.values(ServantStatus);

const generateRandomServant = () => ({
  id: chance.guid(),
  shelter_id: chance.guid(),
  name: chance.name(),
  description: chance.name(),
  image_url: 'https://picsum.photos/200/300',
  date: {
    start: chance.date(),
    end: chance.date(),
  },
  status: chance.pickone(STATUS),
});

const generateRandomServantList = (count: number) => Array.from({ length: count }, generateRandomServant);

export const getServantList = (): Promise<Servant[]> =>
  new Promise((resolve) => {
    const response = generateRandomServantList(10);

    resolve(response);
  });
