import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable, InternalServerErrorException, OnModuleInit, UnprocessableEntityException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { mkdir, unlink } from 'fs/promises'
import sharp from 'sharp'
import { Repository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Image } from './image.entity'

const IMAGE_HEIGHT = 1080

@Injectable()
export class ImagesService extends TypeOrmCrudService<Image> implements OnModuleInit {
  constructor(@InjectRepository(Image) public repository: Repository<Image>) {
    super(repository)
  }

  onModuleInit() {
    return mkdir('files').catch(() => {})
  }

  async uploadFile(file: Express.Multer.File) {
    if (!file) throw new UnprocessableEntityException('File is required')

    const fileName = `${uuidv4()}.avif`
    try {
      await sharp(file.buffer)
        .resize({ height: IMAGE_HEIGHT, withoutEnlargement: true })
        .avif()
        .toFile(`files/${fileName}`)

      const image = new Image()
      image.fileName = fileName
      await this.repository.insert(image)

      return image
    } catch (err) {
      unlink(`files/${fileName}`).catch(() => {})
      throw new InternalServerErrorException('Error analyzing image, it might be in an invalid format')
    }
  }
}
