import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
import { uploadImageConfig } from '../../config/upload.config'
import { UsersModule } from '../users/users.module'
import { ImagesController } from './images.controller'
import { ImagesService } from './images.service'
import { Image } from './image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Image]), MulterModule.register(uploadImageConfig), UsersModule],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}
