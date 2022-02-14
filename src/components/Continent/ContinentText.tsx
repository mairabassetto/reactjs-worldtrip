import { 
  Box, Grid, GridItem, Heading, HStack, Icon, Text, Popover, PopoverContent, PopoverTrigger, PopoverCloseButton, PopoverArrow, PopoverBody
} from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";

interface ContinentTextProps{
  description: string;
  countries: string;
  languages: string;
  cities: string;
  cities_list: string;
}

export function ContinentText({ description, countries, languages, cities, cities_list } : ContinentTextProps) {
  return (
    <>
      <Grid 
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        h={['146px', '211px']} 
        mt={['24px', '80px']} 
        mb={['80px', '70px', '50px', '40px']}
      >
        <GridItem>
          <Text
            fontWeight='400'
            fontSize={['14px', '24px']}
            color='gray.600'
            textAlign='justify'
          >
            {description}
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
              <Box w='120' h='99' textAlign='center'>
                <Heading fontWeight='600' fontSize={['24px', '48px']} color='yellow'> {countries} </Heading>
                <Text fontWeight='400' fontSize={['17px', '24px']} color='gray.600'> países </Text>
              </Box>

              <Box w='120' h='99' textAlign='center'>
                <Heading fontWeight='600' fontSize={['24px', '48px']} color='yellow'> {languages} </Heading>
                <Text fontWeight='400' fontSize={['17px', '24px']} color='gray.600'> línguas </Text>
              </Box>

              <Box w='120' h='99' textAlign='center'>
                <Heading fontWeight='600' fontSize={['24px', '48px']} color='yellow'> {cities} </Heading>
                <Text fontWeight='400' fontSize={['17px', '24px']} color='gray.600'> cidades + 100
                  <Popover>
                    <PopoverTrigger>
                      <span>
                        <Icon 
                          cursor="pointer" 
                          as={RiInformationLine} 
                          ml="1" 
                          color="gray.400" 
                          w={["10px","16px"]} 
                          h={["10px","16px"]}
                        />
                      </span>
                    </PopoverTrigger>
                    <PopoverContent bg="white" color="gray.700">
                      <PopoverArrow bg="white"/>
                      <PopoverCloseButton />
                      <PopoverBody fontWeight="400" fontSize="lg">{cities_list}</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Text>
              </Box>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}