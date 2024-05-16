import { Injectable, Logger, OnModuleInit, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { RoleEnum, User } from '../modules/users/user.entity'
import { UsersService } from '../modules/users/users.service'
import { JWTPayload } from './auth.types'

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async onModuleInit() {
    const userCount = await this.usersService.count()
    if (userCount === 0) {
      await this.insertDefaultUser()
    }
  }

  async insertDefaultUser() {
    const user = new User()
    user.name = 'Admin'
    user.email = 'user@email.com'
    user.password = 'P@ssw0rd'
    user.role = RoleEnum.SUPER

    this.logger.warn('No user registered in the system, a user was created')
    this.logger.warn(`E-mail: ${user.email}`)
    this.logger.warn(`Password: ${user.password}`)

    await this.usersService.repository.insert(user)
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const passwordMatch = await user.checkPassword(password)
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload: JWTPayload = { id: user.id, email: user.email }
    const jwt = await this.jwtService.signAsync(payload)
    return { jwt, user }
  }

  async changePassword(userID: User['id'], oldPassword: string, newPassword: string) {
    const user = await this.usersService.findOne({ where: { id: userID } })
    if (!user) {
      throw new UnauthorizedException('The authenticated user no longer exists')
    }

    const passwordMatch = await user.checkPassword(oldPassword)
    if (!passwordMatch) {
      throw new UnauthorizedException('Incorrect password')
    }

    user.password = newPassword
    await this.usersService.repository.update(userID, user)
  }
}
