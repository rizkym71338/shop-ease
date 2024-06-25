export const NODE_ENV = process.env.NODE_ENV

export const IS_PROD = NODE_ENV === 'production'

export const IS_DEV = NODE_ENV === 'development'

export const DATABASE_URL = process.env.DATABASE_URL

export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY
