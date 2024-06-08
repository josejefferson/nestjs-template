import { ApiProperty } from '@nestjs/swagger'
import { IsUUID } from 'class-validator'

export type EntityID = string

export class ID {
  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
  @IsUUID()
  id: EntityID
}
