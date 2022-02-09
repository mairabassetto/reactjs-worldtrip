import { Grid, GridItem } from "@chakra-ui/react";
import { Figures } from "./Figures";

export function Icons() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w='100%'
      maxW='1160px'
      aling='center'
      mx='auto'
      mt={['40px', '145px']}
      gap={[1, 5]}
      justifyContent='space-between'
      flexWrap="wrap"
    >
      <GridItem>
        <Figures icon="nightlife" text="vida noturna"/>
      </GridItem>
      <GridItem>
        <Figures icon="beach" text="praia"/>
      </GridItem>
      <GridItem>
        <Figures icon="modern" text="morderno"/>
      </GridItem>
      <GridItem>
        <Figures icon="museum" text="clássico"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Figures icon="andmore" text="e mais..."/>
      </GridItem>
    </Grid>
  );
}