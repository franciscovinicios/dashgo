import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { ReactNode } from 'toasted-notes/node_modules/@types/react'

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({title, children}) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}