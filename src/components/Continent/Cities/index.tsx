import { Grid, Heading } from "@chakra-ui/react";
import { BoxCities } from "./BoxCities";

export function Cities() {
  return (
    <>
      <Heading 
        fontSize={['24px', '36px']} 
        fontWeight='500' 
        color='gray.600' 
        mt={['32px', '80px']} 
        mb={['20px', '40px']} 
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        justifyContent='space-between'
        alignItems='center'
        gap={['20px', '45px']}
      >
        <BoxCities image={"londres"} title={"Londres"} subtitle={"Reino Unido"} flag={"flagLondres"} />
        <BoxCities image={"paris"} title={"Paris"} subtitle={"França"} flag={"flagFranca"} />
        <BoxCities image={"roma"} title={"Roma"} subtitle={"Itália"} flag={"flagItalia"} />
        <BoxCities image={"praga"} title={"Praga"} subtitle={"República Tcheca"} flag={"flagRepublica"} />
        <BoxCities image={"amsterdam"} title={"Amsterdã"} subtitle={"Holanda"} flag={"flagHolanda"} />

      </Grid>
    </>
  );
}