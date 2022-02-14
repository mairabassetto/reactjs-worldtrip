import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

interface BoxCitiesProps{
  image: string;
  title: string;
  subtitle: string;
  flag: string;
}

export function BoxCities({ image, title, subtitle, flag }: BoxCitiesProps): JSX.Element {
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image src={`/images/continent/${image}.jpg`} h='173px' w='100%' />

      <Flex 
        padding='6' 
        justify="space-between" 
        bg='white' 
        border='1px'
        borderColor='yellow.400' 
        borderTop='0px'
      >
        <Flex direction='column'>
          <Heading fontWeight='600' fontSize='20px' color='gray.600' mb='12px'> {title} </Heading>
          <Text fontWeight='500' fontSize='16px' color='gray.60'> {subtitle} </Text>
        </Flex>

        <Image src={`/images/continent/${flag}.png`} borderRadius='50%' h='30px' w='30px' />
      </Flex>
    </Box>
  );
}