export const APP_ROUTES = {
  root: '/',
  personalInfo: '/personal-info',
  addressWork: '/address-work',
  loanParameters: '/loan-parameters',
} as const satisfies Record<string, `/${string}`>
