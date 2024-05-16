import { ApiProperty } from '@nestjs/swagger'
import * as bcrypt from 'bcrypt'
import { Exclude } from 'class-transformer'
import { IsEnum, IsString } from 'class-validator'
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm'
import { BaseEntity } from '../../base/base.entity'

export enum RoleEnum {
  SUPER = 'super',
  ADMIN = 'admin'
}

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ example: 'Joe' })
  @Column()
  @IsString()
  name: string

  @ApiProperty({ example: 'user@email.com' })
  @Column({ unique: true })
  @IsString()
  email: string

  @ApiProperty({ enum: RoleEnum, example: RoleEnum.ADMIN })
  @Column({ default: RoleEnum.ADMIN })
  @IsEnum(RoleEnum)
  role: RoleEnum

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password, 12)
    }
  }

  checkPassword(password: string) {
    return bcrypt.compare(password, this.password)
  }
}
