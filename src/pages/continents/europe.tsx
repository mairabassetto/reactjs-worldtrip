import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentText } from "../../components/Continent/ContinentText";
import { Header } from "../../components/Header";

export default function Europe() {
  return (
    <>
      <Header />
      <ContinentBanner />
      
      <Flex direction='column' maxW='1200px' mx='auto' mb='10' px='1rem' >
        <ContinentText />
      </Flex>
    </>
  );
}
