import { ApiProperty, OmitType } from '@nestjs/swagger'
import { IsString } from 'class-validator'
import { User } from '../user.entity'

export class CreateUserDto extends OmitType(User, ['id', 'createdAt', 'updatedAt', 'password']) {
  @ApiProperty({ example: 'P@ssw0rd' })
  @IsString()
  password: string
}
