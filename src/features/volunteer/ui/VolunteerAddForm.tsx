import { FormEvent } from 'react';
import { useAddVolunteer } from '../lib/useAddVolunteer';

export default function VolunteerAddForm() {
  const { mutate } = useAddVolunteer();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>VolunteerAddForm</div>
      <button type="submit">추가하기</button>
    </form>
  );
}
