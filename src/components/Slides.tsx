import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/virtual';
import { useState } from "react";

export function Slides() {
  const [slides, setSlides] = useState([
    {
      href: '/continents/europe',
      figure: '/images/europe.jpg',
      title: 'Europa',
      description: 'O continente mais antigo.'
    },
    {
      href: '/continents/asia',
      figure: '/images/asia.jpg',
      title: 'Ásia',
      description: 'O continente mais tecnológico.'
    },
    {
      href: '/continents/africa',
      figure: '/images/africa.jpg',
      title: 'África',
      description: 'O continente mais selvagem.'
    },
    {
      href: '/continents/southamerica',
      figure: '/images/southamerica.jpg',
      title: 'América do Sul',
      description: 'O continente mais diversificado.'
    },
    {
      href: '/continents/northamerica',
      figure: '/images/northamerica.jpg',
      title: 'América do Norte',
      description: 'The "new world".'
    },
    {
      href: '/continents/oceania',
      figure: '/images/oceania.jpg',
      title: 'Oceania',
      description: 'O menor continente do mundo.'
    },
  ]);
  
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
          {slides.map((slide, index) => (
            <SwiperSlide virtualIndex={index}> 
                <Flex 
                w='100%'
                h='100%'
                align='center' 
                justify='center' 
                bgImage={`url(${slide.figure})`}
                bgRepeat='no-repeat'
                bgPosition='center'
                bgSize='cover'
                textAlign='center'
                >
                <Link href={slide.href}>
                  <a>
                    <Heading fontWeight='700' fontSize={['2xl', '3xl', '4xl', '5xl']} color='gray.50'> {slide.title} </Heading>
                    <Text fontWeight='700' fontSize={['sm', 'lg', 'xl', '2xl']} color='gray.50'> {slide.description} </Text>
                  </a>
                </Link>
              </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
      </Flex>
    )
}
