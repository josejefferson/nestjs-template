import { User } from './modules/users/user.entity'

declare global {
  namespace Express {
    export interface Request {
      authUser?: User | null
    }
  }
}
