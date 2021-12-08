import { Flex, SimpleGrid, Box, Text, theme, useBreakpointValue } from '@chakra-ui/react';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

/* o window ele nao esta disponivel na camada de criacao do next
e a gente usa ess funcao pra deixar o apexcharts disponivel
apenas no browser, vai ser um carregamento dinamico ; */
import dynamic from 'next/dynamic'
const Chart = dynamic(
  () => import("react-apexcharts"),
  { ssr: false }
)

import { ApexOptions } from 'apexcharts';

// sao as configuracoes
const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-26T00:00:00.000Z',
      '2021-03-28T00:00:00.000Z',
      '2021-03-29T00:00:00.000Z',
      '2021-03-30T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};


// sao os dados do grafico
const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 129]
  },
]


export default function Dashboard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" >
          <Box
            p={["6","8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Inscritos da semana</Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Taxa de abertura</Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
          
        </SimpleGrid>

      </Flex>
    </Flex>
  )
}