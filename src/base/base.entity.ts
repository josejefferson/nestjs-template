import { ApiProperty } from '@nestjs/swagger'
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
  id: string

  @ApiProperty({ example: '2024-12-31T23:59:59.999Z' })
  @CreateDateColumn()
  createdAt: Date

  @ApiProperty({ example: '2024-12-31T23:59:59.999Z' })
  @UpdateDateColumn()
  updatedAt: Date
}
