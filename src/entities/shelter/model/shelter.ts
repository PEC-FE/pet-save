import { Pagination } from '../../common/model';

export interface Shelter {
  name: string;
  type: string;
  animalType: string;
  address: string;
  phoneNumber: string;
  operatingHours: string;
}

export interface Shelters extends Pagination {
  shelters: Shelter[];
}
