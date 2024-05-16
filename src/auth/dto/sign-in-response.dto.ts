import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../modules/users/user.entity'

export class SignInResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIs...Jf36POk6yJV_adQssw5c' })
  jwt: string

  @ApiProperty()
  user: User
}
