import { Layout } from '@/components/Layout'
import { Markdown } from '@/components/Markdown'
import { Container, Flex, Grid, Text } from '@mantine/core'
import api from '@services/api'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons'
import Link from 'next/link'

const BlogDetail = ({ data }) => {
  // replace &nbsp; with a space and customize in markdown component
  const content = data.attributes.content.replaceAll('&nbsp;', '')

  return (
    <Layout withFooter withHeader>
      <Container size="md" my={75} mx="auto">
        <Flex mt="7rem" direction="column">
          <Link href="/">
            <Text size="md" color="gray.7" sx={{ cursor: 'pointer' }}>
              Kembali
            </Text>
          </Link>
          <Text fw="700" size={34} color="gray.9" my="lg">
            {data?.attributes?.title}
          </Text>
        </Flex>

        <Markdown children={content} />

        <Grid mx="auto" justify="center" mt={80}>
          <Grid.Col md={5}>
            {data?.attributes?.previousBlog && (
              <Link href={`/blog/${data?.attributes?.previousBlog?.slug}`}>
                <Flex direction="row" gap="xs" px={10} py={10} bg="gray.1" align="center" sx={{ borderRadius: '6px' }}>
                  <Text lineClamp={1} sx={{ flex: '1 1 0%' }} fw={600}>
                    {data?.attributes?.previousBlog?.title}
                  </Text>
                  <IconChevronLeft />
                </Flex>
              </Link>
            )}
          </Grid.Col>
          <Grid.Col md={5}>
            {data?.attributes?.nextBlog && (
              <Link href={`/blog/${data?.attributes?.nextBlog?.slug}`}>
                <Flex direction="row" gap="xs" px={10} py={10} bg="gray.1" align="center" sx={{ borderRadius: '6px' }}>
                  <IconChevronRight />
                  <Text lineClamp={1} sx={{ flex: '1 1 0%' }} fw={600}>
                    {data?.attributes?.nextBlog?.title}
                  </Text>
                </Flex>
              </Link>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {
  const query = ctx.query
  const slug = query.slug
  const data = await api
    .get(`${process.env.API_URL}/api/blogs/${slug}`)
    .then(({ data }) => data)
    .catch((e) => {
      console.log(e)
      return {}
    })
  if (!data || Object.keys(data).length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: `/blog`
      }
    }
  }
  return {
    props: {
      data: data?.data
    }
  }
}

export default BlogDetail
