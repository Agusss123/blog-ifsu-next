import { DataTable } from '@/components/DataTable'
import { DefaultHeader } from '@/components/Header'
import { NavbarSimple } from '@/components/Sidebar'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Button, Container, Flex, Group, Text, Title } from '@mantine/core'
import { IconFeather } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Paginations } from '@/components/Pagination'

const DashboardPage = () => {
  const [activePage, setPage] = useState(1)
  const LIMIT = 4
  const { data, isLoading, meta } = useFetcher(
    `blogs?populate=*&pagination[pageSize]=${LIMIT}&pagination[page]=${activePage}&sort=createdAt:desc`
  )
  return (
    <>
      <DefaultHeader withLink={false} />
      <Flex>
        <NavbarSimple />
        <Container w="100%" maw="100%" m="0" px="2rem" py="1.5rem">
          <Group position="apart" align="center">
            <Flex direction="column" gap="sm">
              <Title fw="bolder" size={34}>
                Post
              </Title>
              <Text color="gray.6">Buat postingan dan artikel baru.</Text>
            </Flex>
            <Link href="/admin/blog/create">
              <Button leftIcon={<IconFeather size={20} stroke={1.5} />} color="dark.6" radius="md">
                Tambah Post
              </Button>
            </Link>
          </Group>

          {/* Jika data lebih dari 0 set height auto, jika kurang set 63vh */}
          <Box mb="xl" h={data?.length > 0 ? 'auto' : '63vh'}>
            {!isLoading && data?.length > 0 && (
              <>
                <DataTable data={data} />
                <Paginations
                  page={activePage}
                  onChange={setPage}
                  total={meta?.pagination?.pageCount}
                  size="lg"
                  position="apart"
                />
              </>
            )}
          </Box>
        </Container>
      </Flex>
    </>
  )
}
export default DashboardPage
