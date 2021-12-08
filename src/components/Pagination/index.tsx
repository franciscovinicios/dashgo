import { Stack, Button, Box } from '@chakra-ui/react';
import { PaginationItens } from './PaginationItens';

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>3</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItens number={1} isCurrent />
        <PaginationItens number={2}/>
        <PaginationItens number={3} />
      </Stack>
    </Stack>
  )
}