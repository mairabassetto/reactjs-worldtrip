import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      width='100%'
      height={['160px', '250px', '250px', '335px']}
      bgImage='url(/images/banner.jpg)'
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgSize='cover'
    >
      <Flex
        width='100%'
        mX='auto'
        align='center'
        justify={['center', 'space-between']}
        paddingX={['5', '10', '15', '20', '36']}
      >

        <div>
          <Text color='gray.50' fontWeight='500' fontSize={['xl', '2l', '2xl', '4xl']}>
            5 continentes, <br /> infinitas possibilidades
          </Text>

          <Text 
            color='gray.200' 
            fontWeight='400' 
            fontSize={['sm','md','xl']} 
            maxWidth={['100%','100%','100%', '524px']} 
            mt={5}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
      
        <Image
          width={['300px', '300px','300px','417px']}
          display={['none', 'none', 'block']}
          transform='translateY(48px)'
          src='/images/airplane.svg'
          alt='airplane'
        >
        </Image>
      </Flex>
    </Flex>
  );
}