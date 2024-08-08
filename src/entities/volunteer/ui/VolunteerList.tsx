import { Box, Text, Stack, Image, Grid, Badge, Flex } from '@chakra-ui/react';

import { mapToVolunteerList, useVolunteerListQuery } from '@/src/shared';

export const VolunteerList = () => {
  const { data, error, isLoading } = useVolunteerListQuery();

  if (isLoading) {
    return <Box>로딩</Box>;
  }
  if (error) {
    return <Box>오류</Box>;
  }

  const volunteers = data ? mapToVolunteerList(data) : [];

  return (
    <Box padding="4">
      <Text fontSize="2xl" mb="4" textAlign="center">
        Volunteer List
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6">
        {volunteers.map((volunteer) => (
          <Box key={volunteer.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src={volunteer.profileImageUrl} alt={volunteer.name} width="100%" height="200px" objectFit="cover" />
            <Box p="6">
              <Stack spacing="3">
                <Text fontWeight="bold" fontSize="xl">
                  {volunteer.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {volunteer.ageGroup}
                </Text>
                <Flex wrap="wrap">
                  {volunteer.skills.map((skill, index) => (
                    <Badge key={`${skill}-${index}`} colorScheme="teal" mr="1" mb="1">
                      {skill}
                    </Badge>
                  ))}
                </Flex>
                <Text fontSize="sm" color="gray.500">
                  {volunteer.address}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
