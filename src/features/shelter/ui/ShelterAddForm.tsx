import { FormEvent } from 'react';
import { useAddShelter } from '../lib/useAddShelter';

export default function ShelterAddForm() {
  const { mutate } = useAddShelter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>ShelterAddForm</div>
      <button type="submit">추가하기</button>
    </form>
  );
}
