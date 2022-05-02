import { Heading } from "@chakra-ui/react"
import { Routes, Route, Link as RouterLink } from "react-router-dom"
import { Box, Stack, Link } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'

import Home from "./Home"
import SimpleForm from "./SimpleForm"
import ButtonGrid from "./ButtonGrid"
import DataGrid from "./DataGrid"

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
          <Link to="/data" as={RouterLink} color="blue">
            Data Grid (Fix Me)
          </Link>
        </Stack>

        <Divider />

        <Box>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="simple" element={<SimpleForm />} />
            <Route path="grid" element={<ButtonGrid />} />
            <Route path="data" element={<DataGrid />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  )
}
