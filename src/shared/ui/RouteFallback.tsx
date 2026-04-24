import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import { en } from '@/shared/i18n/en'
import {
  FormSkeletonActions,
  FormSkeletonCard,
  FormSkeletonFields,
  PromoHeadlineGroup,
  PromoPointCard,
  PromoPointsGrid,
  PromoTop,
  RouteFallbackFormArea,
  RouteFallbackFormColumn,
  RouteFallbackMobileBar,
  RouteFallbackPromoRail,
  RouteFallbackRoot,
} from './RouteFallback.styles'

export function RouteFallback() {
  return (
    <RouteFallbackRoot>
      <RouteFallbackPromoRail aria-hidden>
        <PromoTop>
          <Skeleton
            variant="rounded"
            width={48}
            height={48}
            sx={{ bgcolor: 'hsl(var(--primary-foreground) / 0.16)' }}
          />

          <Box sx={{ display: 'grid', gap: 'var(--space-2)' }}>
            <Skeleton
              variant="text"
              width="8rem"
              height={24}
              sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.2)' }}
            />
            <Skeleton
              variant="text"
              width="6rem"
              height={18}
              sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.14)' }}
            />
          </Box>
        </PromoTop>

        <PromoHeadlineGroup>
          <Skeleton
            variant="rounded"
            width="80%"
            height={56}
            sx={{ bgcolor: 'hsl(var(--primary-foreground) / 0.14)' }}
          />
          <Skeleton
            variant="rounded"
            width="68%"
            height={56}
            sx={{ bgcolor: 'hsl(var(--primary-foreground) / 0.14)' }}
          />
          <Skeleton
            variant="text"
            width="88%"
            height={22}
            sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.14)' }}
          />
          <Skeleton
            variant="text"
            width="72%"
            height={22}
            sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.12)' }}
          />
        </PromoHeadlineGroup>

        <PromoPointsGrid>
          {Array.from({ length: 3 }).map((_, index) => (
            <PromoPointCard key={index}>
              <Skeleton
                variant="rounded"
                width={40}
                height={40}
                sx={{ bgcolor: 'hsl(var(--primary-foreground) / 0.16)' }}
              />

              <Box sx={{ display: 'grid', gap: 'var(--space-2)' }}>
                <Skeleton
                  variant="text"
                  width="10rem"
                  height={20}
                  sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.18)' }}
                />
                <Skeleton
                  variant="text"
                  width="14rem"
                  height={18}
                  sx={{ transform: 'none', bgcolor: 'hsl(var(--primary-foreground) / 0.12)' }}
                />
              </Box>
            </PromoPointCard>
          ))}
        </PromoPointsGrid>
      </RouteFallbackPromoRail>

      <RouteFallbackFormColumn>
        <RouteFallbackMobileBar aria-hidden>
          <Skeleton variant="rounded" width="8rem" height={32} />
          <Skeleton variant="text" width="5rem" height={18} sx={{ transform: 'none' }} />
        </RouteFallbackMobileBar>

        <RouteFallbackFormArea>
          <FormSkeletonCard>
            <Box
              sx={{
                display: 'grid',
                gap: 'var(--space-5)',
                justifyItems: 'stretch',
                alignContent: 'center',
                justifyContent: 'center',
                minHeight: { xs: 320, sm: 360 },
                textAlign: 'center',
              }}
            >
              <Box sx={{ display: 'grid', gap: 'var(--space-3)' }}>
                <Skeleton variant="text" width="12rem" height={28} sx={{ transform: 'none' }} />
                <Skeleton variant="text" width="18rem" height={20} sx={{ transform: 'none' }} />
              </Box>

              <FormSkeletonFields>
                <Skeleton variant="rounded" height={56} />
                <Skeleton variant="rounded" height={56} />
                <Skeleton variant="rounded" height={56} />
              </FormSkeletonFields>

              <FormSkeletonActions>
                <Skeleton variant="rounded" height={48} />
                <Skeleton variant="rounded" height={48} />
              </FormSkeletonActions>

              <Box
                sx={{
                  color: 'text.secondary',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                {en.common.loading}
              </Box>
            </Box>
          </FormSkeletonCard>
        </RouteFallbackFormArea>
      </RouteFallbackFormColumn>
    </RouteFallbackRoot>
  )
}
