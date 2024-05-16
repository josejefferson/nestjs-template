import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiForbiddenResponse, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { RoleEnum } from '../modules/users/user.entity'
import { AuthRoleGuard } from './auth-role.guard'
import { AuthGuard } from './auth.guard'

export function Auth() {
  return applyDecorators(UseGuards(AuthGuard), ApiBearerAuth(), ApiUnauthorizedResponse())
}

export function AuthRoles(...roles: RoleEnum[]) {
  return applyDecorators(Auth(), SetMetadata('roles', roles), UseGuards(AuthRoleGuard), ApiForbiddenResponse())
}

export function Public() {
  return applyDecorators(SetMetadata('isPublic', true), SetMetadata('swagger/apiSecurity', ['public']))
}
