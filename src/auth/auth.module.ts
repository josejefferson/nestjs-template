import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { jwtOptions } from '../config/jwt.config'
import { UsersModule } from '../modules/users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [UsersModule, JwtModule.register(jwtOptions)],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
