import Typography from '@mui/material/Typography'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { Outlet, useLocation } from 'react-router-dom'

import { APP_ROUTES } from '@/shared/constants/routes'
import {
  BrandIconBox,
  FormArea,
  FormColumn,
  GradientText,
  LayoutGrid,
  MobileBrandBar,
  MobileBrandIconBox,
  PromoBlob,
  PromoDotPattern,
  PromoPointIconBox,
  PromoPointRow,
  PromoPoints,
  PromoRail,
} from './layout.styles'

const promoPoints = [
  {
    icon: FlashOnRoundedIcon,
    title: 'Решение за 2 минуты',
    text: 'Заполните 3 шага и получите ответ мгновенно',
  },
  {
    icon: ShieldOutlinedIcon,
    title: 'Безопасные данные',
    text: 'Шифрование TLS и защита по стандарту PCI DSS',
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: 'Без скрытых комиссий',
    text: 'Прозрачные условия — никаких сюрпризов',
  },
]

function MobileHeader() {
  const { pathname } = useLocation()
  const stepNum =
    pathname === APP_ROUTES.addressWork ? 2 : pathname === APP_ROUTES.loanParameters ? 3 : 1

  return (
    <MobileBrandBar>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <MobileBrandIconBox>
          <BoltRoundedIcon sx={{ color: '#fff', fontSize: 20 }} />
        </MobileBrandIconBox>
        <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
          <GradientText>QuickLoan</GradientText>
        </Typography>
      </div>
      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
        Шаг {stepNum} / 3
      </Typography>
    </MobileBrandBar>
  )
}

export function Layout() {
  return (
    <LayoutGrid>
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

        <div
          style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <BrandIconBox>
            <BoltRoundedIcon sx={{ color: '#fff' }} />
          </BrandIconBox>
          <div>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>
              QuickLoan
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', mt: 0.5 }}>
              Финансы без сложностей
            </Typography>
          </div>
        </div>

        <div style={{ position: 'relative', maxWidth: 448 }}>
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
            Деньги, когда они нужны.
          </Typography>
          <Typography
            sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.55 }}
          >
            Получите до <strong style={{ color: '#fff' }}>$1000</strong> на срок до 30 дней. Без
            визитов в офис, без бумажной волокиты.
          </Typography>
        </div>

        <PromoPoints>
          {promoPoints.map(({ icon: Icon, title, text }) => (
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

      <FormColumn>
        <MobileHeader />

        <FormArea>
          <Outlet />
        </FormArea>
      </FormColumn>
    </LayoutGrid>
  )
}
