export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  search: {
    account: '/search/account',
    search: '/search',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
