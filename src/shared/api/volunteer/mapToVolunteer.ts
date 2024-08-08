import type { Volunteer } from '@/src/shared/types';

type VolunteerDetail = Omit<Volunteer, 'age_group' | 'profile_image_url'> & {
  ageGroup: Volunteer['age_group'];
  profileImageUrl: Volunteer['profile_image_url'];
};

export const mapToVolunteerDetail = (volunteer: Volunteer): VolunteerDetail => ({
  ...volunteer,
  ageGroup: volunteer.age_group,
  profileImageUrl: volunteer.profile_image_url,
});
