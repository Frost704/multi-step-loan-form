import { APP_ROUTES } from '@/shared/constants/routes'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function LoanParametersPage() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(APP_ROUTES.addressWork)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleBackClick}>
        Back
      </Button>
    </div>
  )
}
