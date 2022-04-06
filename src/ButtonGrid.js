import { Button, Grid, GridItem } from "@chakra-ui/react"

// NOTE: contents of this component are just an example
// to get you started and illustrate the general idea
// you are free to use whatever structures and components you want
const ButtonGrid = () => {
  // TODO: complete this component
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      <GridItem>
        <Button colorScheme="green">1</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">2</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">3</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">4</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="red">5</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">6</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">7</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">8</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme="green">9</Button>
      </GridItem>
    </Grid>
  )
}

export default ButtonGrid
