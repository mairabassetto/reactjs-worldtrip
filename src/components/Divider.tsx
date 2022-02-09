import { Box, Flex, Text } from "@chakra-ui/react";

export function Divider() {
  return (
    <>
      <Box
        w='100%'
        maxW={['60px', '90px']}
        h='0px'
        mx='auto'
        border={['1px', '1px', '1px', '2px']}
        color={['gray.600']}
        mt={['36px', '80px']} 
      />
      
      <Flex
        w='100%'
        maxW={['297px','839px']}
        h={['54px', '101px']}
        mx='auto'
        textAlign='center'
        justify='center'
      >
        <Text fontWeight='500' fontSize={['lg', 'xl', '2xl', '4xl']} color={['gray.600', 'black']} mt={['24px', '52px']}>
          Vamos nessa?<br />Então escolha seu continente
        </Text>
      </Flex></>
  );
}