import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/app/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/app/query-client'
import { ThemeProvider } from '@mui/material'
import { appTheme } from '@/app/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import '../index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
