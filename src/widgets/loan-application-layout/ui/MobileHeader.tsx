import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import Typography from '@mui/material/Typography'

import { en } from '@/shared/i18n/en'
import { GradientText, MobileBrandBar, MobileBrandContent, MobileBrandIconBox } from './styles'

export function LoanApplicationMobileHeader() {
  return (
    <MobileBrandBar>
      <MobileBrandContent>
        <MobileBrandIconBox>
          <BoltRoundedIcon sx={{ color: '#fff', fontSize: 20 }} />
        </MobileBrandIconBox>

        <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
          <GradientText>{en.layout.brand}</GradientText>
        </Typography>
      </MobileBrandContent>
    </MobileBrandBar>
  )
}
