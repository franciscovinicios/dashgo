import { Box, Text, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import Link from 'next/link'


export default function Userlist() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr> 
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>

              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Francisco Vinicios</Text>
                    <Text fontSize="sm" color="gray.300 ">Francisco.viniciosti@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>05 de Dezembro, 2021</Td>}
               </Tr>

              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcelo Guedes</Text>
                    <Text fontSize="sm" color="gray.300 ">Marcelo.guetes@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de Dezembro, 2021</Td>}
              </Tr>

              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Rodrigo Senna</Text>
                    <Text fontSize="sm" color="gray.300 ">Rodrigo.senna@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Dezembro, 2021</Td>}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}