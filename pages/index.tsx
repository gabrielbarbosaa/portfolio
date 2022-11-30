import { Container, Flex, SimpleGrid } from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'
import { ContactUs } from '../components/home/contact'
import { Card } from '../components/ui/Cards'
import { CardsCarousel } from '../components/ui/Projects'
import { tecnologies } from '../resources/tecnologies'

export default function Home() {
  return (
    <Container size='xl'>
      <header id="home">
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
                layout='responsive'
              />
          </div>
        </Flex>
      </header>
      <section id="about">
        <h1>About</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <SimpleGrid
            cols={5}
            mb={50}
            mt={50}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
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
        </SimpleGrid>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <CardsCarousel />
          
      </section>
      <section id="contact">
          <ContactUs />
      </section>
    </Container>
  )
}
