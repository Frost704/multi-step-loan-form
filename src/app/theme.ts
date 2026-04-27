import { createTheme } from '@mui/material/styles'

const hslVar = (name: string) => `hsl(var(${name}))`
const cssVar = (name: string) => `var(${name})`

// Material UI is used for accessible, consistent form controls and theming.
export const appTheme = createTheme({
  cssVariables: false,
  palette: {
    mode: 'light',
    primary: {
      main: hslVar('--primary'),
      contrastText: hslVar('--primary-foreground'),
    },
    secondary: {
      main: hslVar('--accent'),
      contrastText: hslVar('--accent-foreground'),
    },
    background: {
      default: 'transparent',
      paper: hslVar('--card'),
    },
    text: {
      primary: hslVar('--foreground'),
      secondary: hslVar('--muted-foreground'),
    },
    error: {
      main: hslVar('--destructive'),
      contrastText: hslVar('--destructive-foreground'),
    },
    success: {
      main: hslVar('--success'),
      contrastText: hslVar('--success-foreground'),
    },
    divider: hslVar('--border'),
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
          color: hslVar('--foreground'),
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
          color: hslVar('--foreground'),
        },
        rounded: {
          borderRadius: cssVar('--radius-lg'),
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: cssVar('--radius-sm'),
          paddingInline: cssVar('--space-6'),
          paddingBlock: 6,
          fontSize: cssVar('--font-size-md'),
          boxShadow: 'none',
          '&.Mui-disabled': {
            color: hslVar('--muted-foreground'),
            background: hslVar('--muted'),
            borderColor: hslVar('--border'),
            boxShadow: 'none',
            filter: 'none',
            transform: 'none',
          },
        },
        outlined: {
          borderWidth: 1.5,
          borderColor: hslVar('--border'),
          color: hslVar('--foreground'),
          background: hslVar('--card'),
          '&:hover': {
            borderWidth: 1.5,
            borderColor: hslVar('--primary'),
            background: hslVar('--secondary'),
          },
          '&.Mui-disabled': {
            borderWidth: 1.5,
            borderColor: hslVar('--border'),
            color: hslVar('--muted-foreground'),
            background: hslVar('--muted'),
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'var(--gradient-primary)',
            color: hslVar('--primary-foreground'),
            boxShadow: 'var(--shadow-soft)',
            '&:hover': {
              background: 'var(--gradient-primary)',
              filter: 'brightness(1.1)',
            },
            '&.Mui-disabled': {
              background: hslVar('--muted'),
              color: hslVar('--muted-foreground'),
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
          borderRadius: cssVar('--radius-sm'),
          background: hslVar('--card'),
          color: hslVar('--foreground'),
          transition: cssVar('--transition-smooth'),
          '& fieldset': {
            borderColor: hslVar('--border'),
            transition: cssVar('--transition-smooth'),
          },
          '&:hover fieldset': {
            borderColor: hslVar('--primary'),
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2,
            borderColor: hslVar('--primary'),
          },
          '&.Mui-error fieldset': {
            borderColor: hslVar('--destructive'),
          },
          '&.Mui-error:hover fieldset': {
            borderColor: hslVar('--destructive'),
          },
          '&.Mui-error.Mui-focused fieldset': {
            borderColor: hslVar('--destructive'),
          },
        },
        input: {
          color: hslVar('--foreground'),
          padding: '16px 14px',
        },
        notchedOutline: {
          borderColor: hslVar('--border'),
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: hslVar('--muted-foreground'),
          fontWeight: 500,
          '&.Mui-focused': {
            color: hslVar('--primary'),
          },
          '&.Mui-error': {
            color: hslVar('--destructive'),
          },
          '&.Mui-error.Mui-focused': {
            color: hslVar('--destructive'),
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
            color: hslVar('--destructive'),
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: hslVar('--muted-foreground'),
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: cssVar('--radius-sm'),
          border: `1px solid ${hslVar('--border')}`,
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
          borderRadius: cssVar('--radius-sm'),
          margin: '2px 0',
          fontWeight: 500,
          '&:hover': {
            background: hslVar('--secondary'),
          },
          '&.Mui-selected': {
            background: hslVar('--secondary'),
          },
          '&.Mui-selected:hover': {
            background: hslVar('--secondary'),
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          color: hslVar('--primary'),
          height: 10,
          padding: '16px 0',
        },
        rail: {
          opacity: 0.25,
          background: hslVar('--muted-foreground'),
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
          background: hslVar('--popover'),
          border: `3px solid ${hslVar('--primary')}`,
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
          borderRadius: cssVar('--radius-sm'),
          fontWeight: 700,
          padding: '4px 10px',
        },
        mark: {
          background: hslVar('--muted-foreground'),
          opacity: 0.4,
          height: 6,
          width: 2,
        },
        markActive: {
          opacity: 0,
          background: 'transparent',
        },
        markLabel: {
          color: hslVar('--muted-foreground'),
          fontSize: cssVar('--font-size-xs'),
          fontWeight: 500,
          marginTop: 4,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: cssVar('--radius-lg'),
          boxShadow: 'var(--shadow-elegant)',
          background: 'var(--gradient-card)',
          border: `1px solid ${hslVar('--border')}`,
        },
      },
    },
  },
})
