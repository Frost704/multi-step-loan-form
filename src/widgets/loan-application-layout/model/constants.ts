import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'

import { en } from '@/shared/i18n/en'

export const LOAN_APPLICATION_PROMO_POINTS = [
  {
    icon: FlashOnRoundedIcon,
    title: en.layout.promo.speed.title,
    text: en.layout.promo.speed.text,
  },
  {
    icon: ShieldOutlinedIcon,
    title: en.layout.promo.security.title,
    text: en.layout.promo.security.text,
  },
  {
    icon: VerifiedUserOutlinedIcon,
    title: en.layout.promo.transparency.title,
    text: en.layout.promo.transparency.text,
  },
] as const
