import { NotFoundError } from '@/libs/error'

export class SuccessResponse extends Response {
  constructor(data: any) {
    super(JSON.stringify(data), { status: 200 })
  }
}

export class ErrorResponse extends Response {
  constructor(error: any) {
    super(error.message, { status: error instanceof NotFoundError ? 404 : 500 })
  }
}
