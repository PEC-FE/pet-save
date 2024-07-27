import {
  ContactShelterButton,
  LikeShelterButton,
} from '@/src/features/shelter';

export default function ShelterDetail({ id, name, description }: any) {
  return (
    <div>
      <dl>
        <dt>이름</dt>
        <dd>{name}</dd>
      </dl>

      <ContactShelterButton />
      <LikeShelterButton />
    </div>
  );
}
