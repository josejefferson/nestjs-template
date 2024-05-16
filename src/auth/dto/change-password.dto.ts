import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class ChangePasswordDto {
  @ApiProperty({ example: 'P@ssw0rd' })
  @IsString()
  oldPassword: string

  @ApiProperty({ example: 'P@ssw0rd-NEW' })
  @IsString()
  newPassword: string
}
