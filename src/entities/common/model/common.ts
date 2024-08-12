export type ShelterType = 'animalHospital' | 'shelter' | 'rescueGroup';
export type AnimalType = 'cat' | 'dog' | 'other';

export interface Pagination {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}
