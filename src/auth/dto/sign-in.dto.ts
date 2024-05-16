import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class SignInDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsString()
  email: string

  @ApiProperty({ example: 'P@ssw0rd' })
  @IsString()
  password: string
}
