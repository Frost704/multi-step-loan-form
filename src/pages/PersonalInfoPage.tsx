import { APP_ROUTES } from '@/shared/constants/routes'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function PersonalInfoPage() {
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate(APP_ROUTES.addressWork)
  }

  return (
    <div className="d-flex justify-content-end">
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>
    </div>
  )
}
