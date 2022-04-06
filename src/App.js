import { Heading } from "@chakra-ui/react"
import { Routes, Route, Link as RouterLink } from "react-router-dom"
import { Box, Stack, Link } from "@chakra-ui/react"

import Home from "./Home"
import SimpleForm from "./SimpleForm"
import ButtonGrid from "./ButtonGrid"
import FixMe from "./FixMe"

export default function App() {
  return (
    <Box p={4}>
      <Stack spacing={4} direction="column">
        <Heading size="3xl">Ignition Coding Test</Heading>
        <Stack direction="row" spacing={6}>
          <Link to="/" as={RouterLink} color="blue">
            Home
          </Link>
          <Link to="/simple" as={RouterLink} color="blue">
            Simple Form
          </Link>
          <Link to="/grid" as={RouterLink} color="blue">
            Button Grid
          </Link>
          <Link to="/fixme" as={RouterLink} color="blue">
            Fix Me
          </Link>
        </Stack>

        <Box>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="simple" element={<SimpleForm />} />
            <Route path="grid" element={<ButtonGrid />} />
            <Route path="fixme" element={<FixMe />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  )
}
