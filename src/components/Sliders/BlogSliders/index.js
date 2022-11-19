import { Carousel } from '@mantine/carousel'
import { HorizontalArticleCard } from '@/components/Card/ArticleCard'

export const CardsCarousel = ({ data }) => {
  return (
    <Carousel
      slideSize="25%"
      slideGap="md"
      align="start"
      slidesToScroll={1}
      controlSize={38}
      loop
      withControls={data?.length > 4 ? true : false}>
      {data.map((blog, index) => (
        <Carousel.Slide key={index}>
          <HorizontalArticleCard
            image={process.env.API_URL + blog?.attributes?.thumbnail?.data?.attributes?.url}
            title={blog?.attributes?.title}
            category={blog?.attributes?.category?.data?.attributes?.title}
            link={`/blog/${blog?.attributes?.slug}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}
