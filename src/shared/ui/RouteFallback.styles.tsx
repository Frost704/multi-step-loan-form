import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const RouteFallbackRoot = styled('div')({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '1fr',

  '@media (min-width: 1200px)': {
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    alignItems: 'stretch',
  },
})

export const RouteFallbackPromoRail = styled('aside')({
  display: 'none',

  '@media (min-width: 1200px)': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    overflow: 'hidden',
    padding: 'var(--space-8) var(--space-10)',
    background: 'var(--gradient-primary)',
  },

  '@media (min-width: 1536px)': {
    padding: 'var(--space-10) var(--space-14)',
  },
})

export const PromoTop = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-3)',
})

export const PromoHeadlineGroup = styled('div')({
  position: 'relative',
  maxWidth: 448,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-4)',
})

export const PromoPointsGrid = styled('div')({
  position: 'relative',
  display: 'grid',
  gap: 'var(--space-4)',
})

export const PromoPointCard = styled('div')({
  display: 'grid',
  gridTemplateColumns: '40px 1fr',
  gap: 'var(--space-3)',
  alignItems: 'start',
})

export const RouteFallbackFormColumn = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const RouteFallbackMobileBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'var(--space-6) var(--space-6) 0',

  '@media (min-width: 1200px)': {
    display: 'none',
  },
})

export const RouteFallbackFormArea = styled('div')({
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

export const FormSkeletonCard = styled(Paper)({
  display: 'grid',
  gap: 'var(--space-5)',
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-lg)',
  background: 'var(--gradient-card)',
  boxShadow: 'var(--shadow-elegant)',
  border: '1px solid hsl(var(--border))',

  '@media (min-width: 600px)': {
    padding: 'var(--space-8)',
  },
})

export const FormSkeletonFields = styled('div')({
  display: 'grid',
  gap: 'var(--space-4)',
})

export const FormSkeletonActions = styled('div')({
  display: 'grid',
  gap: 'var(--space-3)',

  '@media (min-width: 600px)': {
    gridTemplateColumns: 'minmax(0, 160px) minmax(0, 1fr)',
  },
})
