import { NotFoundError } from './error'

export class SuccessResponse extends Response {
  constructor(data: any) {
    super(JSON.stringify(data), { status: 200 })
  }
}

export class ErrorResponse extends Response {
  constructor(error: any) {
    if (error instanceof NotFoundError) {
      super(error.message, { status: 404 })
    } else {
      super(error.message, { status: 500 })
    }
  }
}
