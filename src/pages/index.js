import { VerticalArticleCard } from '@/components/Card'
import { Paginations } from '@/components/Pagination'
import { CardsCarousel } from '@/components/Sliders/BlogSliders'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Flex, SimpleGrid, Text } from '@mantine/core'
import { useState } from 'react'
import { Layout } from '@/components/Layout'

export default function Home() {
  // state untuk menampung paginasi halaman aktip dari strapi
  const [activePage, setPage] = useState(1)

  // limit yang akan ditampilkan
  const LIMIT = 4

  // ambil data blog dari strapi dan masukan ke dalam variable yang sudah di set di hooks useFetcher
  const { data, isLoading, meta } = useFetcher(
    `blogs?populate=*&pagination[pageSize]=${LIMIT}&pagination[page]=${activePage}`
  )

  return (
    <Layout withFooter withHeader>
      <Box my={100}>
        <Flex align="flex-start" direction="column" gap="xs">
          <Text color="dark" mt="sm" fw="bold" size="40px">
            Blog
          </Text>
          <Text size="md" color="dark">
            Postingan pada blog ini berisi informasi-informasi tentang desain dan pemrograman.
          </Text>
        </Flex>

        {/* jika tidak loading dan data lebih dari 0 */}
        {!isLoading && data?.length > 0 && (
          <>
            <Box my="50px" mx={0}>
              <CardsCarousel />
            </Box>
            <Box my="50px" mx={0}>
              <SimpleGrid cols={2}>
                {/* looping data untuk ditampilkan dan slice (kembalikan data dari array ke 4) */}
                {data?.slice(0, 4).map((blog, index) => (
                  <VerticalArticleCard
                    key={index}
                    title={blog?.attributes?.title}
                    image={blog?.attributes?.thumbnail?.data?.attributes?.url}
                    date={blog?.attributes?.createdAt}
                    link={`/blog/${blog?.attributes?.slug}`}
                  />
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Paginations page={activePage} onChange={setPage} total={meta?.pagination?.pageCount} size="lg" />
            </Box>
          </>
        )}
      </Box>
    </Layout>
  )
}
