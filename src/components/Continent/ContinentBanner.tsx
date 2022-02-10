import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w='100%'
      h={['150px', '500px']}
      px={['136px', '140px']}
      pt={['0px', '0px', '369px']}
      bgImage='url(/images/continent/bannerEurope.jpg)'
      bgSize='cover'
      bgPosition='center'
      align='center'
      justify={['center', 'center', 'flex-start']}
    >
      <Text
        fontWeight='600' 
        fontSize={['28px', '48px']} 
        color='white' 
        textAlign={['center', 'left']}
      >
        Europa
      </Text>

    </Flex>
  );
}