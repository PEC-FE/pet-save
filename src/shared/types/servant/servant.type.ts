export enum ServantStatus {
  ON = '모집중',
  OFF = '모집완료',
}

export type Servant = {
  id: string;
  shelter_id: string;
  name: string;
  description: string;
  image_url: string;
  date: {
    start: Date;
    end: Date;
  };
  status: ServantStatus;
};
