export const submitErrors = {
  serverError: 'Our service is temporarily unavailable. Please try again later.',
  generic: 'Something went wrong. Please try again later.',
} as const

export const en = {
  common: {
    back: 'Back',
    next: 'Next',
    loading: 'Loading...',
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
    cta: 'Go to application',
  },

  layout: {
    brand: 'QuickLoan',
    tagline: 'Finance made simple',
    headline: 'Money when you need it.',
    subheadline: 'Get up to $1000 for up to 30 days. No office visits, no paperwork.',
    promo: {
      speed: {
        title: 'Decision in 2 minutes',
        text: 'Complete 3 steps and get an instant response',
      },
      security: {
        title: 'Secure data',
        text: 'TLS encryption and PCI DSS compliant protection',
      },
      transparency: {
        title: 'No hidden fees',
        text: 'Transparent terms with no surprises',
      },
    },
  },

  personalInfo: {
    title: 'Personal information',
    description: 'Enter your personal details to continue the application.',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    phoneFormat: 'Phone number format: 0XXX XXX XXX',
    gender: 'Gender',
    maxChars: (n: number) => `Maximum ${n} characters`,
    errors: {
      phoneRequired: 'Phone is required',
      phoneDigitsOnly: 'Phone must contain digits only',
      phoneStartsWith0: 'Phone must start with 0',
      phoneExactLength: (n: number) => `Phone must contain exactly ${n} digits`,
      firstNameRequired: 'First name is required',
      firstNameMaxLength: (n: number) => `First name must be at most ${n} characters`,
      lastNameRequired: 'Last name is required',
      lastNameMaxLength: (n: number) => `Last name must be at most ${n} characters`,
      genderRequired: 'Gender is required',
    },
  },

  addressWork: {
    title: 'Address and place of work',
    description: 'Enter your address and select your place of work.',
    address: 'Address',
    placeOfWork: 'Place of work',
    maxChars: (n: number) => `Maximum ${n} characters`,
    loadingOptions: 'loading...',
    failedToLoad: 'Failed to load',
    retry: 'Retry',
    errors: {
      placeOfWorkRequired: 'Place of work is required',
      addressRequired: 'Address is required',
      addressMaxLength: (n: number) => `Address must be at most ${n} characters`,
    },
  },

  loanParameters: {
    title: 'Loan parameters',
    description: 'Choose the loan amount and term.',
    loanAmount: 'Loan amount',
    loanTerm: 'Loan term',
    days: 'days',
    daysAbbr: 'd',
    applicant: 'Applicant',
    summary: 'Summary',
    submit: 'Submit application',
    submitting: 'Submitting...',
    submitErrors,
    dialog: {
      successTitle: 'Congratulations!',
      errorTitle: 'Submission failed',
      successLoanInfo: (amount: number, days: number) =>
        `Your loan of $${amount} for ${days} days has been`,
      approved: 'approved',
      defaultError: 'Please try again later',
      successAction: 'Great!',
      errorAction: 'Try again',
    },
  },
} as const
