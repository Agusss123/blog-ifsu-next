import { VerticalArticleCard } from '@/components/Card'
import { Paginations } from '@/components/Pagination'
import { CardsCarousel } from '@/components/Sliders/BlogSliders'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Flex, SimpleGrid, Text } from '@mantine/core'
import { useState } from 'react'
import { Layout } from '@/components/Layout'

export default function Home() {
  const [activePage, setPage] = useState(1)
  const LIMIT = 4
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

        {/* Blog Section */}
        {!isLoading && (
          <>
            <Box my="50px" mx={0}>
              <CardsCarousel />
            </Box>
            <Box my="50px" mx={0}>
              <SimpleGrid cols={2}>
                {data?.slice(0, 4).map((blog, index) => (
                  <VerticalArticleCard
                    key={index}
                    title={blog?.attributes?.title}
                    image={process.env.API_URL + blog?.attributes?.thumbnail?.data?.attributes?.url}
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
