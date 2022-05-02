import { Link as RouterLink } from "react-router-dom"

import { Box, ListItem, Text, UnorderedList, Link } from "@chakra-ui/react"

const Home = () => {
  return (
    <Box>
      <Text mb="4">
        Please follow instructions in <Text as="mark">README.md</Text> in this
        repo to see the detailed list of instructions for each exercise.
      </Text>
      <Text mb="4">
        All component exercises are built with{" "}
        <Link href="https://chakra-ui.com/" color="teal" isExternal>
          Chakra component library
        </Link>
        , which has excellent documentation to speed up your work with these
        exercises.
      </Text>
      <Box>
        <Text mb="4">
          Here's a quick summary of what you are expected to do:
        </Text>
        <UnorderedList>
          <ListItem>
            <Text as="kbd">isValidAmount</Text> Helper Function in lib folder
          </ListItem>
          <ListItem>
            Write a test for <Text as="kbd">isValidAmount</Text> in lib folder
          </ListItem>
          <ListItem>
            <Link to="/simple" as={RouterLink} color="blue">
              Simple React Form
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/grid" as={RouterLink} color="blue">
              Button Grid
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/fixme" as={RouterLink} color="blue">
              Find and Fix an Error in existing component
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}

export default Home
