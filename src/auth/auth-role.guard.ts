import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { User } from '../modules/users/user.entity'

@Injectable()
export class AuthRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublicHandler = this.reflector.get<boolean>('isPublic', context.getHandler())
    const isPublicClass = this.reflector.get<boolean>('isPublic', context.getClass())
    if (isPublicHandler || isPublicClass) return true

    const handlerRoles = this.reflector.get<string[]>('roles', context.getHandler()) ?? []
    const classRoles = this.reflector.get<string[]>('roles', context.getClass()) ?? []
    const roles = [...handlerRoles, ...classRoles]
    const request = context.switchToHttp().getRequest()
    const user: User = request.authUser
    return this.matchRoles(roles, user.role)
  }

  matchRoles(roles: string[], userRole: string) {
    return roles.some((role) => role === userRole)
  }
}
