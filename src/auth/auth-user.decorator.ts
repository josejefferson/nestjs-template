import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '../modules/users/user.entity'

/** Returns the currently logged in user */
export const AuthUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  return request.authUser as User
})
