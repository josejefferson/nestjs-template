import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'
import { unlink } from 'fs/promises'
import { AfterRemove, Column, Entity } from 'typeorm'
import { BaseEntity } from '../../base/base.entity'

@Entity({ name: 'images' })
export class Image extends BaseEntity {
  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000.webp' })
  @Column()
  @IsString()
  fileName: string

  @AfterRemove()
  onRemove() {
    return unlink(`files/${this.fileName}`).catch(() => {})
  }
}
