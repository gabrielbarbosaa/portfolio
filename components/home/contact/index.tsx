import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons';
import Link from 'next/link';
import { useStyles } from './style';

  const social = [
    {icons: IconBrandLinkedin, link: 'https://www.linkedin.com/in/gabriel-barbosa-azevedo/'},
    {icons: IconBrandInstagram, link: 'https://www.instagram.com/gabrielbarbosa.js/'},
  ];

  export function ContactUs() {
    const { classes } = useStyles();
  
    const icons = social.map((Icon, index) => (
      <ActionIcon 
        key={index} 
        size={28} 
        className={classes.social} 
        variant="transparent"
      >
        <Link href={Icon.link}  target="_blank">
          <Icon.icons size={22} stroke={1.5} />
        </Link>
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contate-me</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Envie sua mensagem que em até 24h eu irei entrar em contato com você.
            </Text>
  
            <Group mt="xl">{icons}</Group>
          </div>
          <form className={classes.form}>
            <TextInput
              label="E-mail"
              placeholder="seuemail@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Nome"
              placeholder="Michael Jackson"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Sua mensagem"
              placeholder="mensagem ..."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group position="right" mt="md">
              <Button className={classes.control}>Enviar</Button>
            </Group>
          </form>
        </SimpleGrid>
      </div>
    );
  }