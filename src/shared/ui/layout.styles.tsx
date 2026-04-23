import { styled } from '@mui/material/styles'

export const LayoutGrid = styled('div')({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '1fr',
  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
    alignItems: 'start',
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
    padding: '2rem 2.5rem',
    background: 'var(--gradient-primary)',
  },
  '@media (min-width: 1536px)': {
    padding: '2.5rem 3.5rem',
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

export const PromoBlob = styled('div', {
  shouldForwardProp: p =>
    !['size', 'opacity', 'color', 'top', 'left', 'bottom', 'right'].includes(p as string),
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
  filter: 'blur(3rem)',
  background: color,
  pointerEvents: 'none',
}))

export const PromoDotPattern = styled('div')({
  position: 'absolute',
  inset: 0,
  opacity: 0.07,
  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
  backgroundSize: '24px 24px',
  pointerEvents: 'none',
})

export const BrandIconBox = styled('div')({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '1rem',
  backdropFilter: 'blur(8px)',
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.25)',
})

export const PromoPoints = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const PromoPointRow = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.875rem',
})

export const PromoPointIconBox = styled('div')({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '0.75rem',
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.18)',
})

export const FormColumn = styled('main')({
  display: 'flex',
  flexDirection: 'column',
})

export const MobileBrandBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 1.5rem 0',
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
  borderRadius: '0.75rem',
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
  padding: '2rem 1.25rem',
  '@media (min-width: 600px)': {
    padding: '2rem',
  },
  '@media (min-width: 1200px)': {
    justifyContent: 'flex-start',
    padding: '2rem 2.5rem',
  },
  '@media (min-width: 1536px)': {
    padding: '2.5rem 3.5rem',
  },
})
