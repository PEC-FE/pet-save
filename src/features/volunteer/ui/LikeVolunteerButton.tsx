import { useLikeVolunteer } from '../lib/useLikeVolunteer';

export default function LikeVolunteerButton() {
  const { mutate: likeShelter } = useLikeVolunteer();

  const handleClick = () => {
    likeShelter();
  };

  return (
    <button type="button" onClick={handleClick}>
      좋아요
    </button>
  );
}
