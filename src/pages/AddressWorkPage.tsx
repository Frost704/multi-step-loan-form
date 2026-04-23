import { APP_ROUTES } from '@/shared/constants/routes'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function AddressWorkPage() {
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate(APP_ROUTES.loanParameters)
  }

  const handleBackClick = () => {
    navigate(APP_ROUTES.personalInfo)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleBackClick}>
        Back
      </Button>
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>
    </div>
  )
}
