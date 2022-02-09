import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();

  const notHomePage = asPath !== "/";

  return (
    <Flex
      as='header'
      width='100%'
      height={['50px', '100px']}
      marginX='auto'
      paddingX='1rem'
      align='center'
      bg='white'
    >
      <Grid
        width='100%'
        height='100%'
        marginX='auto'
        alignItems='center'
        maxWidth='1160px'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      >
        {notHomePage &&(
          <Link href="/">
            <a>
              <Icon 
                as={RiArrowLeftSLine} 
                color='gray.600' 
                w={['16px', '32px']} 
                h={['16px', '32px']}
              />
            </a>
          </Link>
        )}

        <Image 
          width= {['80px', '184px']}
          src='/images/logo.svg' 
          alt='logo'
          justifySelf='center'
          gridColumn='2' 
        />
      </Grid>
    </Flex>
  );
}