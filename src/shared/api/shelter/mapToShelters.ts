import { createShelter, Pagination, Shelter, Shelters } from '@/src/entities';
import { ApiShelterResponse } from './type';

export const mapToShelters = (apiResponse: ApiShelterResponse): Shelters => {
  const items = apiResponse.response.body.items.item;

  const shelters: Shelter[] = items.map((item) =>
    createShelter(
      item.careNm._text,
      item.divisionNm._text,
      item.saveTrgtAnimal._text,
      item.careAddr._text,
      item.careTel._text,
      `${item.weekOprStime._text} - ${item.weekOprEtime._text}`,
    ),
  );

  const pagination: Pagination = {
    totalCount: parseInt(apiResponse.response.body.totalCount._text, 10),
    currentPage: parseInt(apiResponse.response.body.pageNo._text, 10),
    pageSize: parseInt(apiResponse.response.body.numOfRows._text, 10),
    totalPages: Math.ceil(
      parseInt(apiResponse.response.body.totalCount._text, 10) /
        parseInt(apiResponse.response.body.numOfRows._text, 10),
    ),
  };

  return {
    shelters,
    pagination,
  };
};
