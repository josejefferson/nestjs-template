import { ApiProperty } from '@nestjs/swagger'

export class CreateImageDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File
}
