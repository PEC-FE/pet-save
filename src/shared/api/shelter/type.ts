export interface ApiShelterItem {
  careNm: { _text: string };
  orgNm: { _text: string };
  divisionNm: { _text: string };
  saveTrgtAnimal: { _text: string };
  careAddr: { _text: string };
  jibunAddr?: { _text: string };
  lat: { _text: string };
  lng: { _text: string };
  dsignationDate: { _text: string };
  weekOprStime: { _text: string };
  weekOprEtime: { _text: string };
  closeDay: { _text: string };
  vetPersonCnt: { _text: string };
  specsPersonCnt: { _text: string };
  careTel: { _text: string };
  dataStdDt: { _text: string };
}

export interface ApiShelterResponse {
  response: {
    body: {
      items: {
        item: ApiShelterItem[];
      };
      numOfRows: { _text: string };
      pageNo: { _text: string };
      totalCount: { _text: string };
    };
  };
}

export type ShelterType = {
  id: number;
  name: string;
  age: number;
};
