import { DataTable } from '@/components/DataTable'
import { DefaultHeader } from '@/components/Header'
import { Paginations } from '@/components/Pagination'
import { NavbarSimple } from '@/components/Sidebar'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Button, Container, Flex, Group, Text, Title } from '@mantine/core'
import { IconFeather } from '@tabler/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Layout } from '@/components/Layout'

const DashboardPage = () => {
  // state untuk menampung paginasi halaman aktip dari strapi
  const [activePage, setPage] = useState(1)

  // limit data yang akan ditampilkan
  const LIMIT = 4

  // ambil data blog dari strapi dan masukan ke dalam variable yang sudah di set di hooks useFetcher
  const { data, isLoading, meta } = useFetcher(
    `blogs?populate=*&pagination[pageSize]=${LIMIT}&pagination[page]=${activePage}&sort=createdAt:desc`
  )

  return (
    <Layout withoutPadding>
      <DefaultHeader withLink={false} />
      <Flex direction="row" ml={300} mt={70}>
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

          <Box mb="xl">
            {/* jika tidak loading dan data lebih dari 0 */}
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
    </Layout>
  )
}
export default DashboardPage
