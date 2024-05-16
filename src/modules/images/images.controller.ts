import { Crud, CrudController } from '@dataui/crud'
import { Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiPayloadTooLargeResponse,
  ApiTags,
  ApiUnprocessableEntityResponse
} from '@nestjs/swagger'
import { AuthRoles } from '../../auth/auth.decorator'
import { RoleEnum } from '../users/user.entity'
import { CreateImageDto } from './dto/create-image.dto'
import { Image } from './image.entity'
import { ImagesService } from './images.service'

@Crud({
  model: { type: Image },
  dto: { create: CreateImageDto },
  routes: {
    exclude: ['createOneBase', 'createManyBase', 'updateOneBase', 'replaceOneBase']
  },
  query: {
    sort: [{ field: 'updatedAt', order: 'DESC' }]
  }
})
@AuthRoles(RoleEnum.ADMIN)
@ApiUnprocessableEntityResponse()
@ApiPayloadTooLargeResponse()
@ApiTags('images')
@Controller('images')
export class ImagesController implements CrudController<Image> {
  constructor(public service: ImagesService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Create a single Image' })
  @ApiBody({ type: CreateImageDto })
  @ApiCreatedResponse({ type: Image })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.service.uploadFile(file)
  }
}
