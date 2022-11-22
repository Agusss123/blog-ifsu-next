import { Layout } from '@/components/Layout'
import { Button, Container, Flex, Group, Text, Input } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import api from '@services/api'
import { IconChevronLeft, IconCheck, IconX } from '@tabler/icons'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

// muat komponen RichTextEditor secara dinamis dan tidak di render di server
const RichTextEditor = dynamic(() => import('@mantine/rte'), { ssr: false })

/**
 *
 * @param { data }
 * data diambil dari getServerSideProps
 * @returns
 */

const EditBlogPage = ({ data }) => {
  // ambil tag img dari konten dan tambahkan env ke url dengan regex (reguler expresion)
  const content = data?.attributes?.content?.replace(/<img src="\/uploads/g, `<img src="${process.env.API_URL}/uploads`)

  // State untuk menampung konten jika value editor berubah
  const [value, onChange] = useState(content)

  // function untuk menghandle ketika upload image
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

  // function untuk mengubah data jalankan secara async untuk menunggu data selesai diubah
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
      .put(`/api/blogs/${data?.id}`, data)
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

/**
 * getServerSideProps memungkinkan kita untuk memuat data dari server secara ssr
 * ssr = server side rendering
 * @param {*} ctx context api bawaan dari nextjs
 * @returns
 */
export const getServerSideProps = async (ctx) => {
  // ambil slug dari url
  // slug digunakan untuk mengambil detail blog dari api
  const query = ctx.query
  const slug = query.slug

  // fetch data dari api menggunakan axios
  const data = await api
    .get(`${process.env.API_URL}/api/blogs/${slug}`)
    .then(({ data }) => data) // jika api berhasil dan data ada, maka kita ambil datanya
    .catch((e) => {
      console.log(e)
      // jika api tidak berhasil dan data tidak ada, maka kita tidak mengembalikan apa apa
      return null
    })
  // jika data kosong, kita arahkan ke halaman daftar blog
  if (!data || Object.keys(data).length === 0) {
    return {
      // redirect = bawaan nextjs, untuk mengarahkan ke halaman tertentu
      redirect: {
        permanent: false, // jika true, maka selamanya halaman ini akan diarahkan ke halaman lain
        destination: `/blog`
      }
    }
  }
  // jika data ada, muat data halaman detail blog
  return {
    props: {
      data: data?.data
    }
  }
}

export default EditBlogPage
