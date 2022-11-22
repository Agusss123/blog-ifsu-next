import { HorizontalArticleCard } from '@/components/Card'
import { useFetcher } from '@/hooks/useFetcher'
import { Carousel } from '@mantine/carousel'

export const CardsCarousel = () => {
  // ambil data blog dari strapi dan masukan ke dalam variable yang sudah di set di hooks useFetcher
  const { data, isLoading } = useFetcher(`blogs?populate=*`)

  return (
    <>
      {/* jika tidak loading tampilkan carousel  */}
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
              <HorizontalArticleCard
                image={process.env.API_URL + blog?.attributes?.thumbnail?.data?.attributes?.url}
                title={blog?.attributes?.title}
                category={blog?.attributes?.category?.data?.attributes?.title}
                link={`/blog/${blog?.attributes?.slug}`}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </>
  )
}
