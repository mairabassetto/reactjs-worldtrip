import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps{
  image: string;
  title: string;
}

export function ContinentBanner({ image, title }: ContinentBannerProps) {
  return (
    <Flex
      w='100%'
      h={['150px', '500px']}
      px={['136px', '140px']}
      pt={['0px', '0px', '369px']}
      bgImage={`/images/continent/${image}.jpg`}
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
        {title}
      </Text>
    </Flex>
  );
}