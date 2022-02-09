import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from "swiper";

export function Slides() {
  return (
    <Flex
        w='100%'
        maxW={['375px', '1240px']}
        h={['250px', '450px']}
        mx='auto'
        mb={['24px', '40px']}
        mt={['40px', '50px', '60px','90px']}
        align='center'
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex 
              w='100%'
              h='100%'
              align='center' 
              justify='center' 
              bgImage='url(/images/europe.jpg)'
              bgRepeat='no-repeat'
              bgPosition='center'
              bgSize='cover'
              textAlign='center'
              >
              <Link href={'/continents/europe'}>
                <a>
                  <Heading fontWeight='700' fontSize={['2xl', '3xl', '4xl', '5xl']} color='gray.50'> Europe </Heading>
                  <Text fontWeight='700' fontSize={['sm', 'lg', 'xl', '2xl']} color='gray.50'> O continente mais antigo. </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex 
              w='100%'
              h='100%'
              align='center' 
              justify='center' 
              bgImage='url(/images/asia.jpg)'
              bgRepeat='no-repeat'
              bgPosition='center'
              bgSize='cover'
              textAlign='center'
              >
              <Link href={'/continents/asia'}>
                <a>
                  <Heading fontWeight='700' fontSize={['2xl', '3xl', '4xl', '5xl']} color='gray.50'> Ásia </Heading>
                  <Text fontWeight='700' fontSize={['sm', 'lg', 'xl', '2xl']} color='gray.50'> O continente mais tecnológico. </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    )
}
