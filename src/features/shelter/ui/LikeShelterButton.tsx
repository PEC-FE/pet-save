import { useLikeShelter } from '../lib/useLikeShelter';

export default function LikeShelterButton() {
  const { mutate: likeShelter } = useLikeShelter();

  const handleClick = () => {
    likeShelter();
  };

  return (
    <button type="button" onClick={handleClick}>
      좋아요
    </button>
  );
}
