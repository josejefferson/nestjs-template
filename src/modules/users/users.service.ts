import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) public repository: Repository<User>) {
    super(repository)
  }

  async findOneByEmail(email: string) {
    const result = await this.findOneBy({ email })
    return result
  }
}
