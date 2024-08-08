import type { Volunteer, VolunteerListItem } from '@/src/shared/types';

export const mapToVolunteerList = (volunteerList: Volunteer[]): VolunteerListItem[] =>
  volunteerList.map((volunteer) => ({
    id: volunteer.id,
    name: volunteer.name,
    ageGroup: volunteer.age_group,
    skills: volunteer.skills,
    address: volunteer.location.address,
    profileImageUrl: volunteer.profile_image_url,
  }));
