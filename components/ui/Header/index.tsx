import { useState } from 'react';
import Image from 'next/image';
import {  Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles } from './style';

interface IHeader {
  links: { link: string; label: string }[];
}

export function Navigation({ links }: IHeader) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={`#${link.link}`}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60} mb={20} className={classes.root}>
      <Container size='xl' className={classes.header}>
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
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="md" color="#FFFFFF" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}