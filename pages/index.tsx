import { Container, Flex } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Cards'
import { CardsCarousel } from '../components/Projects'
import { tecnologies } from '../resources/tecnologies'

export default function Home() {
  return (
    <Container size='xl'>
      <header>
        <Flex
          mih={50}
          gap="xl"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div>
            <h1>Gabriel Barbosa</h1>
            <h2>Web Developer</h2>
          </div>
          <div>
              <Image 
                src='/images/gabrielBarbosa.jpg'
                alt='Image developer'
                width={700}
                height={700}
              />
          </div>
        </Flex>
      </header>
      <section>
        <h1>About</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Flex
          mih={50}
          gap="xl"
          justify="space-between"
          align="center"
          direction="row"
          mt={50}
          mb={50}
        >
          {tecnologies.map((id: any, index: number) => (
            <Card 
              key={index}
              title={id.title} 
              description={id.description} 
              icon={id.icon} 
              fromColor={id.fromColor} 
              toColor={id.toColor}            
            />
          ))}
        </Flex>
      </section>
      <section>
        <h1>Projects</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <CardsCarousel />
          
      </section>
    </Container>
  )
}
