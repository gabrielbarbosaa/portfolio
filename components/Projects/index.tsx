import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {  Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import { useStyles } from './style';
import { projects } from '../../resources/projects';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    const { classes } = useStyles();
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Project link
        </Button>
      </Paper>
    );
  }

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = projects.map((item: any) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            mb={50}
            mt={50}
        >
            {slides}
        </Carousel>
    );
}