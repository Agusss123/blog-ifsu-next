import { Carousel } from '@mantine/carousel'
import { HorizontalArticleCard } from '@/components/Card'
import { useFetcher } from '@/hooks/useFetcher'
import { Box, Container } from '@mantine/core'

export const CardsCarousel = () => {
  const { data, isLoading } = useFetcher(`blogs?populate=*`)
  return (
    <>
      {!isLoading && (
        <Carousel
          slideSize="25%"
          align="start"
          slidesToScroll={1}
          controlSize={38}
          loop
          slideGap="md"
          withControls={data?.length > 4 ? true : false}>
          {data.map((blog, index) => (
            <Carousel.Slide key={index}>
              {/* <Box w="100%" key={index} h={100} bg="red"> */}
              <HorizontalArticleCard
                image={process.env.API_URL + blog?.attributes?.thumbnail?.data?.attributes?.url}
                title={blog?.attributes?.title}
                category={blog?.attributes?.category?.data?.attributes?.title}
                link={`/blog/${blog?.attributes?.slug}`}
              />
              {/* </Box> */}
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </>
  )
}
