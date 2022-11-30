import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'transform 150ms ease, box-shadow 100ms ease',
      padding: theme.spacing.xl,
      backgroundColor: '#202020',
      border: 'none',
  
      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'scale(1.02)',
      }
    },
  }));