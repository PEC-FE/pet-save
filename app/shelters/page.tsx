import { useShelterList } from '@/src/widgets/shelter/lib/useShelterList';

import Container from '@/src/shared/ui/Container';
import { ShelterList } from '@/src/widgets/shelter/ui/ShelterList';

const SheltersPage = () => {
  const { sheltersData } = useShelterList();

  if (!sheltersData) {
    return <div>No Data..</div>;
  }

  return (
    <Container title="동물보호소 목록">
      <ShelterList
        shelters={sheltersData.shelters}
        totalCount={sheltersData.totalCount}
        currentPage={sheltersData.currentPage}
        pageSize={sheltersData.pageSize}
      />
    </Container>
  );
};

export default SheltersPage;
