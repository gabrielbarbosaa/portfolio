import { Container, Flex } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Container size='xl'>
      <header>
        <h1>Gabriel Barbosa</h1>
        <h2>Web Developer</h2>
        <Flex
          mih={50}
          bg="rgba(0, 0, 0, .3)"
          gap="xl"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div>
            
          </div>
        </Flex>
      </header>
    </Container>
  )
}
