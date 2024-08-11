'use client';

import { Box, Text, Grid, Image, Stack } from '@chakra-ui/react';

import { mapToServantList } from '@/src/shared';
import { useServantListQuery } from '@/src/shared/api/servant/useServantListQuery';

export const ServantList = () => {
  const { data, isError, isLoading } = useServantListQuery();

  if (isLoading) {
    return <Box>로딩중입니다.</Box>;
  }
  if (isError) {
    return <Box>오류가 발생했습니다.</Box>;
  }

  const servants = data ? mapToServantList(data) : [];

  return (
    <Box padding="4">
      <Text fontSize="2xl" mb="4" textAlign="center">
        봉사활동 목록
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6">
        {servants.map((servant) => (
          <Box key={servant.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src={servant.imageUrl} alt={servant.name} width="100%" height="200px" objectFit="cover" />
            <Box p="6">
              <Stack spacing="3">
                <Text fontWeight="bold" fontSize="xl">
                  {servant.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {servant.description}
                </Text>

                <Text fontSize="sm" color="gray.500">
                  {servant.status}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
