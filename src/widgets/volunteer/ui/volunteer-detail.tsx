import { ContactShelterButton } from '@/src/features/shelter';
import LikeVolunteerButton from '@/src/features/volunteer/ui/LikeVolunteerButton';

export default function VolunteerDetail({ id, name, description }: any) {
  return (
    <div>
      <dl>
        <dt>이름</dt>
        <dd>{name}</dd>
      </dl>

      <ContactShelterButton />
      <LikeVolunteerButton />
    </div>
  );
}
