import { Flex } from "@chakra-ui/react";
import { Cities } from "../../components/Continent/Cities/";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { ContinentText } from "../../components/Continent/ContinentText";
import { Header } from "../../components/Header";

export default function Europe() {
  return (
    <>
      <Header />
      <ContinentBanner image={"bannerEurope"} title={"Europa"} />
      
      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem' >

        <ContinentText 
          description={"A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste."} 
          countries={"50"} 
          languages={"60"} 
          cities={"24"} 
          cities_list={"Roma, Praga, Barcelona, Paris, etc"} />

        <Cities />
        
      </Flex>
    </>
  );
}
