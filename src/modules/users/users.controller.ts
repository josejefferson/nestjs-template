import { Crud, CrudController } from '@dataui/crud'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthRoles } from '../../auth/auth.decorator'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { RoleEnum, User } from './user.entity'
import { UsersService } from './users.service'

@Crud({
  model: { type: User },
  dto: { create: CreateUserDto, update: UpdateUserDto }
})
@AuthRoles(RoleEnum.SUPER)
@ApiTags('users')
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
