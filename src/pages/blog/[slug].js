import { Button, Container, Flex, Grid, Group, Text } from '@mantine/core'
import api from '@services/api'
import { Markdown } from '@/components/Markdown'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons'

const BlogDetail = ({ data }) => {
  // replace &nbsp; with a space and customize in markdown component
  const content = data.attributes.content.replaceAll('&nbsp;', '')

  return (
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

      <Group spacing="xs" position="center" my={30}>
        <Flex>
          <Link href="/">
            <Button color="gray.7" variant="subtle" radius="md" px={20} py={20} bg="gray.1" rightIcon={<IconChevronLeft />}>
              Preview Mode for Static Generation
            </Button>
          </Link>
        </Flex>
        <Flex>
          <Link href="/">
            <Button color="gray.7" variant="subtle" radius="md" px={20} py={20} bg="gray.1" leftIcon={<IconChevronRight />}>
              Belajar figjam untuk brainstorming
            </Button>
          </Link>
        </Flex>
      </Group>
    </Container>
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
