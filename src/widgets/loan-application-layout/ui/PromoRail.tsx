import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import Typography from '@mui/material/Typography'

import { en } from '@/shared/i18n/en'
import { LOAN_APPLICATION_PROMO_POINTS } from '../model/constants'
import {
  BrandIconBox,
  PromoBlob,
  PromoBrandRow,
  PromoDotPattern,
  PromoHeadlineContainer,
  PromoPointIconBox,
  PromoPointRow,
  PromoPoints,
  PromoRail,
} from './styles'

export function LoanApplicationPromoRail() {
  return (
    <PromoRail>
      <PromoBlob
        aria-hidden
        size="24rem"
        opacity={0.3}
        color="hsl(var(--accent))"
        top="-8rem"
        left="-8rem"
      />

      <PromoBlob
        aria-hidden
        size="28rem"
        opacity={0.25}
        color="hsl(var(--primary-glow))"
        bottom="-8rem"
        right="-5rem"
      />

      <PromoDotPattern aria-hidden />

      <PromoBrandRow>
        <BrandIconBox>
          <BoltRoundedIcon sx={{ color: '#fff' }} />
        </BrandIconBox>

        <div>
          <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>
            {en.layout.brand}
          </Typography>

          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', mt: 0.5 }}>
            {en.layout.tagline}
          </Typography>
        </div>
      </PromoBrandRow>

      <PromoHeadlineContainer>
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 800,
            fontSize: { lg: '2.4rem', xl: '3rem' },
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            mb: 2,
          }}
        >
          {en.layout.headline}
        </Typography>

        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.55 }}>
          {en.layout.subheadline}
        </Typography>
      </PromoHeadlineContainer>

      <PromoPoints>
        {LOAN_APPLICATION_PROMO_POINTS.map(({ icon: Icon, title, text }) => (
          <PromoPointRow key={title}>
            <PromoPointIconBox>
              <Icon sx={{ color: '#fff', fontSize: 20 }} />
            </PromoPointIconBox>

            <div>
              <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', mb: 0.25 }}>
                {title}
              </Typography>

              <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                {text}
              </Typography>
            </div>
          </PromoPointRow>
        ))}
      </PromoPoints>
    </PromoRail>
  )
}
