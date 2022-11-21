import { Layout } from '@/components/Layout'
import { Button, Container, Flex, Group, Text, Input } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import api from '@services/api'
import { IconChevronLeft, IconCheck, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(() => import('@mantine/rte'), { ssr: false })

const EditBlogPage = ({ data }) => {
  // Konten
  const dataContent = data?.attributes?.content
  // Id Blog
  const id = data?.id
  // Ambil tag img dari konten dan tambahkan env ke url
  const content = dataContent?.replace(/<img src="\/uploads/g, `<img src="${process.env.API_URL}/uploads`)
  // State untuk menampung konten jika value editor berubah
  const [value, onChange] = useState(content)

  // Function untuk handle upload image
  const handleImageUpload = useCallback(
    (file) =>
      new Promise(async (resolve, reject) => {
        const formData = new FormData()
        formData.append('files', file)
        try {
          const result = await api.post('/api/upload', formData)
          resolve(process.env.API_URL + result.data[0].url)
        } catch (err) {
          reject(err)
          console.log(err)
        }
      }),
    []
  )

  // Function untuk mengubah data jalankan secara async untuk menunggu data selesai diubah
  const handleSubmit = async (e) => {
    // saat function dijalanan, prevent default agar tidak reload
    e.preventDefault()

    // ambil data dari form
    const data = {
      data: {
        title: e.target.title.value,
        content: value
      }
    }

    // post data ke api
    api
      .put(`/api/blogs/${id}`, data)
      .then(() => {
        // jika berhasil
        showNotification({
          title: 'Data berhasil diubah',
          icon: <IconCheck />
        })
      })
      // jika gagal
      .catch(() => {
        showNotification({
          title: 'Data gagal diubah',
          icon: <IconX />
        })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Group position="apart" p="xl">
        <Link href="/admin">
          <Flex align="center" justify="center" gap="xs">
            <IconChevronLeft />
            <Text>Kembali</Text>
          </Flex>
        </Link>
        <Button color="dark" type="submit">
          Publish
        </Button>
      </Group>
      <Layout>
        <Container size="md" my={75} mx="auto">
          <Input.Wrapper label="Judul: " size="xl" mb="xl">
            <Input placeholder="Belajar figjam" defaultValue={data?.attributes?.title} name="title" required />
          </Input.Wrapper>
          <RichTextEditor
            value={value}
            onChange={onChange}
            placeholder="Tulis sesuatu..."
            onImageUpload={handleImageUpload}
            id="rte"
          />
        </Container>
      </Layout>
    </form>
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

export default EditBlogPage
