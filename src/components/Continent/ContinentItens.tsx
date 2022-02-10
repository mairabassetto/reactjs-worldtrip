import { Flex, Heading, Text } from "@chakra-ui/react";

export function ContinentItens() {
  return (
    <Flex
      alingItems='center'
      justifyContent='space-between'
    >
      <Flex
        justify='center'
        direction='column'
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>50</Heading>
        <Text fontWeight='600' fontSize={['18', '24']} color='gray.600'>países</Text>
      </Flex>

      <Flex
        justify='center'
        direction='column'
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>60</Heading>
        <Text fontWeight='600' fontSize={['18', '24']} color='gray.600'>línguas</Text>
      </Flex>

      <Flex
        justify='center'
        direction='column'
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>27</Heading>
        <Text fontWeight='600' fontSize={['18', '24']} color='gray.600'>cidades + 100</Text>
      </Flex>
    </Flex>
  );
}