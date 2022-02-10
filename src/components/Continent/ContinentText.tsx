import { Box, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";

export function ContinentText() {
  return (
    <>
      <Grid 
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        h={['146px', '211px']} 
        mt={['24px', '80px']} 
      >
        <GridItem>
          <Text
            fontWeight='400'
            fontSize={['14px', '24px']}
            color='gray.600'
            textAlign='justify'
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </GridItem>

        <GridItem alignSelf= 'center' justifySelf= {['center', 'center', 'center', 'end']}>
          <Box 
            align='center' 
            maxW={['343px', '450px', '490px']} 
            h={['59px', '99px']}
            mt={['20px', '20px', '30px', '0px']} 
          >
            <HStack spacing='42px' justify='center'>
              <Box w='120' h='99' textAlign='center' >
                <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>50</Heading>
                <Text fontWeight='400' fontSize={['17', '24']} color='gray.600'>países</Text>
              </Box>

              <Box w='120' h='99' textAlign='center'>
                <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>60</Heading>
                <Text fontWeight='400' fontSize={['17', '24']} color='gray.600'>línguas</Text>
              </Box>

              <Box w='120' h='99' textAlign='center'>
                <Heading fontWeight='600' fontSize={['24', '48']} color='yellow'>27</Heading>
                <Text fontWeight='400' fontSize={['17', '24']} color='gray.600'>cidades + 100</Text>
              </Box>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}