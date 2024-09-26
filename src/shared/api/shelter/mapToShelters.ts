import { Shelter, Shelters } from '@/src/entities';
import { ApiShelterResponse } from './type';
import { Pagination } from '@/src/entities/common/model';

export const mapToShelters = (apiResponse: ApiShelterResponse): Shelters => {
  const items = apiResponse.response.body.items.item;

  const shelters: Shelter[] = items.map((item) => {
    return {
      name: item.careNm._text,
      type: item.divisionNm._text,
      animalType: item.saveTrgtAnimal._text,
      address: item.careAddr._text,
      phoneNumber: item.careTel._text,
      operatingHours: `${item.weekOprStime._text} - ${item.weekOprEtime._text}`,
    };
  });

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
    ...pagination,
  };
};
