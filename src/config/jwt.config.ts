import { JwtModuleOptions } from '@nestjs/jwt'

export const jwtConstants = {
  secret: process.env.JWT_SECRET || Math.random().toString()
}

export const jwtOptions: JwtModuleOptions = {
  global: true,
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '30d' }
}
