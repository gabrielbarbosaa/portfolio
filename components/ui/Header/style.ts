import { createStyles } from "@mantine/core";

const HEADER_HEIGHT = 60;

export const useStyles = createStyles((theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
      background: '#141414',
      borderBottom: `1px solid #1a1a1a`,
    },
  
    dropdown: {
      position: 'absolute',
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 0,
      border: 0,
      overflow: 'hidden',
      background: '#141414',
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
      color: '#6200E4'
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: '#6200E4',
        color: '#FFF',
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  
    linkActive: {
      '&, &:hover': {
        backgroundColor: '#6200E4',
        color: '#FFF',
      },
    },
  }));