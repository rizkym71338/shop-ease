import { ErrorResponse, SuccessResponse } from '@/libs/response'
import { UserService } from '@/services'

export async function GET(_: Request) {
  try {
    const users = await UserService.findMany()
    return new SuccessResponse(users)
  } catch (error) {
    return new ErrorResponse(error)
  }
}
