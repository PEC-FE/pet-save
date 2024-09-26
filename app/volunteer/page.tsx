'use client';

import { VolunteerList } from '@/src/entities';
import { VolunteerFilterForm } from '@/src/widgets';

const Home = () => (
  <main>
    <VolunteerFilterForm />
    <VolunteerList />
  </main>
);

export default Home;
