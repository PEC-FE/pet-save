import Chance from 'chance';

import { Volunteer, VolunteerAgeGroup, VolunteerGender, VolunteerSkills } from '@/src/shared/types';

const chance = new Chance();

const ageGroups = Object.values(VolunteerAgeGroup);
const genders = Object.values(VolunteerGender);
const skills = Object.values(VolunteerSkills);

const randomSkills = () => {
  const shuffled = chance.shuffle(skills);
  return shuffled.slice(0, chance.integer({ min: 1, max: skills.length }));
};

const randomLocation = () => ({
  address: chance.address(),
  lat: Number(chance.latitude({ min: -90, max: 90 })),
  lng: Number(chance.longitude({ min: -180, max: 180 })),
});

export const generateRandomVolunteer = (): Volunteer => ({
  id: chance.guid(),
  userId: chance.guid(),
  name: chance.name(),
  age_group: chance.pickone(ageGroups),
  gender: chance.pickone(genders),
  location: randomLocation(),
  profile_image_url: chance.avatar(),
  skills: randomSkills(),
  experience: chance.paragraph(),
  availability: `${chance.weekday({})}, ${chance.weekday({})}`,
  description: chance.paragraph(),
});

export const generateVolunteers = (count: number) => Array.from({ length: count }, generateRandomVolunteer);
