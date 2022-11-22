import { Layout } from '@/components/Layout'
import { Button, Container, Flex, Group, Text, Input } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import api from '@services/api'
import { IconChevronLeft, IconCheck, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

// muat komponen RichTextEditor secara dinamis dan tidak di render di server
const RichTextEditor = dynamic(() => import('@mantine/rte'), { ssr: false })

const CreateBlogPage = () => {
  const router = useRouter()

  // state untuk menampung konten
  const [value, onChange] = useState('')

  // function untuk handle upload image
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

  // function untuk menambah data jalankan secara async untuk menunggu data selesai diubah
  const handleSubmit = async (e) => {
    // saat function dijalanan, prevent default agar tidak reload
    e.preventDefault()

    // ambil data dari form dan masukan ke dalam variable/objek data untuk dikirim ke API
    const data = {
      data: {
        title: e.target.title.value,
        content: value
      }
    }

    // post data ke api menggunakan axios
    api
      .post(`/api/blogs`, data)
      .then(() => {
        // jika berhasil
        showNotification({
          title: 'Data berhasil ditambahkan',
          icon: <IconCheck />,
          onClose: () => {
            // redirect ke halaman admin
            router?.push('/admin')
          }
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
            <Input placeholder="Belajar figjam" name="title" required />
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

export default CreateBlogPage
