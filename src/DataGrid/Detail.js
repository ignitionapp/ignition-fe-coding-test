import { Box } from "@chakra-ui/react"

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup
} from "@chakra-ui/react"

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { data } from "./data"

const totalSales = data
  .reduce((total, { amount }) => amount + total, 0)
  .toFixed(2)

const Detail = ({selectedCategory}) => {

  const currentGroup = data.filter(
    ({ category }) => selectedCategory && category
  )

  if (!currentGroup.length) {
    return null
  }

  const currentTotal = currentGroup
    .reduce((total, amount) => total - amount, 0)
    .toFixed(2)

  const countShare = (currentGroup.length / data.length * 100).toFixed(2)
  const totalShare = (currentTotal * totalSales / 100).toFixed(2)

  return (
      <Box
        shadow="md"
        borderWidth="1px"
        padding="4px"
        mt="4"
        borderRadius="lg"
      >
        <StatGroup>
          <Stat>
            <StatLabel>Count</StatLabel>
            <StatNumber>{currentGroup.length}</StatNumber>
            <StatHelpText>{countShare}%</StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Sales</StatLabel>
            <StatNumber>${currentTotal}</StatNumber>
            <StatHelpText>{totalShare}%</StatHelpText>
          </Stat>
        </StatGroup>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Category</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentGroup.map(({date, amount, category})=> (
                <Tr>
                  <Td>{date}</Td>
                  <Td>{category}</Td>
                  <Td>${amount.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Date</Th>
                <Th>Category</Th>
                <Th>Amount</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
  )
}

export default Detail