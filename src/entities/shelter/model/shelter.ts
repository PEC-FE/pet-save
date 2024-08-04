// TODO-cch: type 한곳으로 옮기기

export type ShelterType = 'animalHospital' | 'shelter' | 'rescueGroup';
export type AnimalType = 'cat' | 'dog' | 'other';

export interface Shelter {
  name: string;
  type: string;
  animalType: string;
  address: string;
  phoneNumber: string;
  operatingHours: string;
}

export interface Pagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface Shelters {
  shelters: Shelter[];
  pagination: Pagination;
}

export const createShelter = (
  name: string,
  type: string,
  animalType: string,
  address: string,
  phoneNumber: string,
  operatingHours: string,
): Shelter => ({
  name,
  type,
  animalType,
  address,
  phoneNumber,
  operatingHours,
});
