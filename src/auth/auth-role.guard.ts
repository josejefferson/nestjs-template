import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { RoleEnum, User } from '../modules/users/user.entity'

@Injectable()
export class AuthRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublicHandler = this.reflector.get<boolean>('isPublic', context.getHandler())
    const isPublicClass = this.reflector.get<boolean>('isPublic', context.getClass())
    if (isPublicHandler || isPublicClass) return true

    const handlerRoles = this.reflector.get<RoleEnum[]>('roles', context.getHandler()) ?? []
    const classRoles = this.reflector.get<RoleEnum[]>('roles', context.getClass()) ?? []
    const roles = [...handlerRoles, ...classRoles]
    const request = context.switchToHttp().getRequest()
    const user: User = request.authUser
    return this.matchRoles(roles, user.role)
  }

  matchRoles(roles: RoleEnum[], userRole: RoleEnum) {
    return roles.some((role) => role === userRole)
  }
}
