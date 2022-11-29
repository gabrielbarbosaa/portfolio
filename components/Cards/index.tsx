import Image from 'next/image';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import { useStyles } from './style';

interface ICard {
    title: string;
    description: string;
    icon: string
    fromColor: string,
    toColor: string
  }
  
  export function Card({ title, description, icon, toColor, fromColor }: ICard) {
    const { classes } = useStyles();
    return (
      <Paper 
        withBorder 
        radius="sm" 
        className={classes.card}
    >
        <ThemeIcon
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: fromColor, to: toColor }}
        >
          <Image
            src={icon}
            alt='tecnologie icon'
            width={28}
            height={28}
            style={{background: 'none'}}
          />
        </ThemeIcon>
        <Text size="xl" weight={500} mt="md" bg={'#202020'} color='#FFF'>
          {title}
        </Text>
        <Text size="sm" mt="sm" color="dimmed" bg={'#202020'}>
          {description}
        </Text>
      </Paper>
    );
  }