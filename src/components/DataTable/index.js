import { Box, Button, Flex, Group, Menu, Text, Title } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import api from '@services/api'
import { IconDotsVertical, IconEdit, IconTrash, IconCheck, IconX } from '@tabler/icons'
import { toLocaleDate } from '@utils/index'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const DataTable = ({ data }) => {
  const router = useRouter()

  // Function untuk menghapus data dengan mengambil id dari cta buttion
  const handleDelete = (id) => {
    api
      .delete(`/api/blogs/${id}`)
      .then(() => {
        // jika berhasil
        showNotification({
          title: 'Data berhasil dihapus',
          icon: <IconCheck />,
          onClose: () => {
            router?.replace(router?.asPath, undefined, { scroll: false })
          }
        })
      })
      // jika gagal
      .catch(() => {
        showNotification({
          title: 'Data gagal dihapus',
          icon: <IconX />
        })
      })
  }

  return (
    <Box sx={(theme) => ({ border: `1.5px solid ${theme.colors.gray[5]}`, borderRadius: '10px' })} my="xl">
      {/* Looping data dari props */}
      {data.map((row, index) => (
        <Group
          position="apart"
          key={index}
          p="md"
          sx={(theme) => ({
            borderBottom: `1.5px solid ${theme.colors.gray[5]}`,
            '&:last-child': {
              borderBottom: 'none'
            }
          })}>
          <Flex direction="column" gap="sm">
            <Title size={16} fw="bold" color="gray.9">
              {row?.attributes?.title}
            </Title>
            <Text color="gray.7">{toLocaleDate(row?.attributes?.createdAt)}</Text>
          </Flex>
          <Menu transition="fade" position="left-start" width={180} withinPortal>
            <Menu.Target>
              <Button variant="outline" color="gray.5" radius="md" px={9}>
                <IconDotsVertical color="gray" size={16} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Link href={`/admin/blog/${row?.attributes?.slug}`}>
                <Menu.Item icon={<IconEdit size={16} color="blue" stroke={1.5} />}>Edit</Menu.Item>
              </Link>
              <div onClick={() => handleDelete(row?.id)}>
                <Menu.Item icon={<IconTrash size={16} color="red" stroke={1.5} />}>Delete</Menu.Item>
              </div>
            </Menu.Dropdown>
          </Menu>
        </Group>
      ))}
    </Box>
  )
}
