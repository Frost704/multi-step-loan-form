import { createTheme } from '@mui/material/styles'

const v = (name: string) => `hsl(var(${name}))`
const s = (name: string) => `var(${name})`

export const appTheme = createTheme({
  cssVariables: false,
  palette: {
    mode: 'light',
    primary: {
      main: v('--primary'),
      contrastText: v('--primary-foreground'),
    },
    secondary: {
      main: v('--accent'),
      contrastText: v('--accent-foreground'),
    },
    background: {
      default: 'transparent',
      paper: v('--card'),
    },
    text: {
      primary: v('--foreground'),
      secondary: v('--muted-foreground'),
    },
    error: {
      main: v('--destructive'),
      contrastText: v('--destructive-foreground'),
    },
    success: {
      main: v('--success'),
      contrastText: v('--success-foreground'),
    },
    divider: v('--border'),
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          minHeight: '100%',
          background: 'var(--gradient-hero)',
          backgroundAttachment: 'fixed',
          color: v('--foreground'),
          WebkitFontSmoothing: 'antialiased',
        },
        '#root': {
          minHeight: '100%',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          color: v('--foreground'),
        },
        rounded: {
          borderRadius: s('--radius-lg'),
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: s('--radius-sm'),
          paddingInline: s('--space-6'),
          paddingBlock: 6,
          fontSize: s('--font-size-md'),
          boxShadow: 'none',
          '&.Mui-disabled': {
            color: v('--muted-foreground'),
            background: v('--muted'),
            borderColor: v('--border'),
            boxShadow: 'none',
            filter: 'none',
            transform: 'none',
          },
        },
        outlined: {
          borderWidth: 1.5,
          borderColor: v('--border'),
          color: v('--foreground'),
          background: v('--card'),
          '&:hover': {
            borderWidth: 1.5,
            borderColor: v('--primary'),
            background: v('--secondary'),
          },
          '&.Mui-disabled': {
            borderWidth: 1.5,
            borderColor: v('--border'),
            color: v('--muted-foreground'),
            background: v('--muted'),
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'var(--gradient-primary)',
            color: v('--primary-foreground'),
            boxShadow: 'var(--shadow-soft)',
            '&:hover': {
              background: 'var(--gradient-primary)',
              filter: 'brightness(1.1)',
            },
            '&.Mui-disabled': {
              background: v('--muted'),
              color: v('--muted-foreground'),
            },
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: s('--radius-sm'),
          background: v('--card'),
          color: v('--foreground'),
          transition: s('--transition-smooth'),
          '& fieldset': {
            borderColor: v('--border'),
            transition: s('--transition-smooth'),
          },
          '&:hover fieldset': {
            borderColor: v('--primary'),
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2,
            borderColor: v('--primary'),
          },
          '&.Mui-error fieldset': {
            borderColor: v('--destructive'),
          },
          '&.Mui-error:hover fieldset': {
            borderColor: v('--destructive'),
          },
          '&.Mui-error.Mui-focused fieldset': {
            borderColor: v('--destructive'),
          },
        },
        input: {
          color: v('--foreground'),
          padding: '16px 14px',
        },
        notchedOutline: {
          borderColor: v('--border'),
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: v('--muted-foreground'),
          fontWeight: 500,
          '&.Mui-focused': {
            color: v('--primary'),
          },
          '&.Mui-error': {
            color: v('--destructive'),
          },
          '&.Mui-error.Mui-focused': {
            color: v('--destructive'),
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginInline: 4,
          fontWeight: 500,
          '&.Mui-error': {
            color: v('--destructive'),
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: v('--muted-foreground'),
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: s('--radius-sm'),
          border: `1px solid ${v('--border')}`,
          boxShadow: 'var(--shadow-elegant)',
          marginTop: 6,
        },
        list: {
          padding: 6,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: s('--radius-sm'),
          margin: '2px 0',
          fontWeight: 500,
          '&:hover': {
            background: v('--secondary'),
          },
          '&.Mui-selected': {
            background: v('--secondary'),
          },
          '&.Mui-selected:hover': {
            background: v('--secondary'),
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          color: v('--primary'),
          height: 10,
          padding: '16px 0',
        },
        rail: {
          opacity: 0.25,
          background: v('--muted-foreground'),
          height: 10,
        },
        track: {
          background: 'var(--gradient-primary)',
          border: 'none',
          height: 10,
        },
        thumb: {
          width: 28,
          height: 28,
          background: v('--popover'),
          border: `3px solid ${v('--primary')}`,
          boxShadow: 'var(--shadow-soft)',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'var(--shadow-glow)',
          },
          '&:before': {
            display: 'none',
          },
        },
        valueLabel: {
          background: 'var(--gradient-primary)',
          borderRadius: s('--radius-sm'),
          fontWeight: 700,
          padding: '4px 10px',
        },
        mark: {
          background: v('--muted-foreground'),
          opacity: 0.4,
          height: 6,
          width: 2,
        },
        markActive: {
          opacity: 0,
          background: 'transparent',
        },
        markLabel: {
          color: v('--muted-foreground'),
          fontSize: s('--font-size-xs'),
          fontWeight: 500,
          marginTop: 4,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: s('--radius-lg'),
          boxShadow: 'var(--shadow-elegant)',
          background: 'var(--gradient-card)',
          border: `1px solid ${v('--border')}`,
        },
      },
    },
  },
})
