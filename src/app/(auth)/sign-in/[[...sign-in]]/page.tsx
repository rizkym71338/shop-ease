import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <SignIn
      path='/sign-in'
      signUpUrl='/sign-up'
      fallbackRedirectUrl='/'
      afterSignOutUrl='/sign-in'
      forceRedirectUrl='/'
      signUpFallbackRedirectUrl='/'
      signUpForceRedirectUrl='/'
    />
  )
}
