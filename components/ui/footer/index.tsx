import { Anchor, Group, ActionIcon, Container } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Image from 'next/image'
import { useStyles } from './style';

interface IFooter {
  links: { link: string; label: string }[];
}

export function Footer({ links }: IFooter) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={`#${link.link}`}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container size='xl' className={classes.inner}>
        <div>
            <Image 
                src='/images/logo.svg' 
                alt='logo'
                width={40}
                height={40}
            />
            <span style={{color: '#FFF'}}>
                Gabriel Barbosa
            </span>
        </div>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" radius="xl" variant='transparent'>
            <IconBrandTwitter size={18} stroke={1.5} color='#FFFFFF'/>
          </ActionIcon>
          <ActionIcon size="lg" radius="xl" variant='transparent'>
            <IconBrandYoutube size={18} stroke={1.5} color='#FFFFFF' />
          </ActionIcon>
          <ActionIcon size="lg" radius="xl" variant='transparent'>
            <IconBrandInstagram size={18} stroke={1.5} color='#FFFFFF' />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}