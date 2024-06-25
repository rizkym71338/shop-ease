import { ErrorResponse, SuccessResponse } from '@/libs/response'
import { UserService } from '@/services'

export async function GET(_: Request, { params }: { params: { clerkId: string } }) {
  const clerkId = params.clerkId

  try {
    const user = await UserService.findFirstByClerkId(clerkId)
    return new SuccessResponse(user)
  } catch (error) {
    return new ErrorResponse(error)
  }
}
