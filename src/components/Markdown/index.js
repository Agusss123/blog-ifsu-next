import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { omit } from '@utils/index'
import { Image, Text } from '@mantine/core'

const MarkdownComponent = {
  p: (props) => (
    <Text my="1rem" fw={400} color="gray.8" {...omit(props, 'node')}>
      {props.children}
    </Text>
  ),
  h1: ({ ...props }) => <Text size="2.25rem" color="gray.8" fw={900} {...omit(props, 'node')} />,
  h2: ({ ...props }) => <Text size="1.875rem" color="gray.8" fw={800} {...omit(props, 'node')} />,
  h3: ({ ...props }) => <Text size="1.5rem" color="gray.8" fw={700} {...omit(props, 'node')} />,
  h4: ({ ...props }) => <Text size="1.25rem" color="gray.8" fw={600} {...omit(props, 'node')} />,
  h5: ({ ...props }) => <Text size="1.125rem" color="gray.8" fw={500} {...omit(props, 'node')} />,
  h6: ({ ...props }) => <Text size="1rem" color="gray.8" fw={400} {...omit(props, 'node')} />,
  img: ({ ...props }) => (
    <Image
      alt={props.alt}
      {...omit(props, 'node')}
      style={{
        width: '100%'
      }}
    />
  )
}

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.API_URL}${uri}`)}
      children={children}
      components={MarkdownComponent}
    />
  )
}
