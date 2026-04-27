import { styled } from '@mui/material/styles'

export const LayoutGrid = styled('div')({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '1fr',

  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    alignItems: 'stretch',
  },
})

export const PromoRail = styled('aside')({
  display: 'none',

  '@media (min-width: 1200px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflow: 'hidden',
    padding: 'var(--space-8) var(--space-10)',
    background: 'var(--gradient-primary)',
  },

  '@media (min-width: 1536px)': {
    padding: 'var(--space-10) var(--space-14)',
  },
})

type PromoBlobProps = {
  size: string
  opacity: number
  color: string
  top?: string
  left?: string
  bottom?: string
  right?: string
}

const promoBlobHiddenProps = ['size', 'opacity', 'color', 'top', 'left', 'bottom', 'right']

export const PromoBlob = styled('div', {
  shouldForwardProp: prop => !promoBlobHiddenProps.includes(String(prop)),
})<PromoBlobProps>(({ size, opacity, color, top, left, bottom, right }) => ({
  position: 'absolute',
  top,
  left,
  bottom,
  right,
  width: size,
  height: size,
  borderRadius: '50%',
  opacity,
  filter: 'blur(var(--space-14))',
  background: color,
  pointerEvents: 'none',
}))

export const PromoDotPattern = styled('div')({
  position: 'absolute',
  inset: 0,
  opacity: 0.07,
  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
  backgroundSize: 'var(--space-6) var(--space-6)',
  pointerEvents: 'none',
})

export const BrandIconBox = styled('div')({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 'var(--radius-md)',
  backdropFilter: 'blur(var(--space-2))',
  background: 'hsl(var(--primary-foreground) / 0.15)',
  border: '1px solid hsl(var(--primary-foreground) / 0.25)',
})

export const PromoPoints = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-4)',
})

export const PromoPointRow = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'var(--space-3)',
})

export const PromoPointIconBox = styled('div')({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 'var(--radius-sm)',
  background: 'hsl(var(--primary-foreground) / 0.12)',
  border: '1px solid hsl(var(--primary-foreground) / 0.18)',
})

export const PromoBrandRow = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const PromoHeadlineContainer = styled('div')({
  position: 'relative',
  maxWidth: 448,
})

export const MobileBrandContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})

export const FormColumn = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const MobileBrandBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-6) var(--space-6) 0',

  '@media (min-width: 1200px)': {
    display: 'none',
  },
})

export const MobileBrandIconBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  borderRadius: 'var(--radius-sm)',
  background: 'var(--gradient-primary)',
})

export const GradientText = styled('span')({
  background: 'var(--gradient-primary)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const FormArea = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 576,
  margin: '0 auto',
  padding: 'var(--space-6) var(--space-5)',

  '@media (min-width: 600px)': {
    padding: 'var(--space-6)',
  },

  '@media (min-width: 1200px)': {
    justifyContent: 'center',
    padding: 'var(--space-8) var(--space-10)',
  },

  '@media (min-width: 1536px)': {
    padding: 'var(--space-10) var(--space-14)',
  },
})
