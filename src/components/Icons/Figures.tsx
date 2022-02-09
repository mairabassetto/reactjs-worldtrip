import { Flex, Image, Text } from '@chakra-ui/react';
import { useBreakpointValue } from "@chakra-ui/react";

interface IconProps{
  icon: string,
  text: string,
}

export function Figures({ icon, text}: IconProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Flex direction={['row', 'column']} align='center' justify='center'>
      {isMobile ? <Image src={`/images/${icon}.svg`} w='85px' h='85px' mb='60px' /> : <Text color='yellow' fontSize='3xl' mr='2'> • </Text>}
      <Text fontWeight='500' color={['#47585B', 'black'] }fontSize={['lg', 'xl', '2xl']}> {text} </Text>
    </Flex>
  );
}