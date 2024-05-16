import { User } from '../modules/users/user.entity'

export interface JWTPayload {
  id: User['id']
  email: User['email']
}
