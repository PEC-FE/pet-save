import type { AppLocation } from '../location';

export enum VolunteerAgeGroup {
  EARLY_TWENTIES = '20대 초반',
  LATE_TWENTIES = '20대 후반',
  EARLY_THIRTIES = '30대 초반',
  LATE_THIRTIES = '30대 후반',
  EARLY_FORTIES = '40대 초반',
  LATE_FORTIES = '40대 후반',
  FIFTIES_AND_ABOVE = '50대 이상',
}

export enum VolunteerGender {
  MALE = '남성',
  FEMALE = '여성',
  OTHER = '기타',
}

export enum VolunteerSkills {
  DOG_CARE = '강아지 돌봄',
  OLD_DOG_CARE = '노견 케어',
  WALK = '산책',
  TRAINING = '훈련',
  CLEANING = '청소',
}

export type Volunteer = {
  id: string; // 봉사자 고유 ID
  userId: string; // 사용자 ID
  name: string; // 이름
  age_group: VolunteerAgeGroup; // 연령대
  gender: VolunteerGender; // 성별
  location: AppLocation; // 위치
  profile_image_url: string; // 프로필 이미지 URL
  skills: VolunteerSkills[]; // 경험
  experience?: string; // 경력
  availability?: string; // 봉사 가능 시간
  description?: string; // 소개
};

export type VolunteerDetail = Omit<Volunteer, 'age_group' | 'profile_image_url'> & {
  ageGroup: Volunteer['age_group'];
  profileImageUrl: Volunteer['profile_image_url'];
};

export type VolunteerListItem = Pick<Volunteer, 'id' | 'name' | 'skills'> & {
  ageGroup: Volunteer['age_group'];
  address: Volunteer['location']['address'];
  profileImageUrl: Volunteer['profile_image_url'];
};
