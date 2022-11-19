import { CardsCarousel } from '@/components/Sliders/BlogSliders'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Flex, Text, SimpleGrid } from '@mantine/core'
import { VerticalArticleCard } from '@/components/Card/ArticleCard'

export default function Home() {
  const { data, isLoading } = useFetcher('blogs?populate=*')

  return (
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
          <Box my="50px">
            <CardsCarousel data={data?.slice(0)} />
          </Box>
          <Box my="50px">
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
        </>
      )}
    </Box>
  )
}
