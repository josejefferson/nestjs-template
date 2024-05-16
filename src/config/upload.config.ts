import { BadRequestException } from '@nestjs/common'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'
import { memoryStorage } from 'multer'

const MAX_FILE_SIZE = 1024 * 1024 * 5 // 5MB

export const uploadConfig: MulterOptions = {
  storage: memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE }
}

export const uploadImageConfig: MulterOptions = {
  ...uploadConfig,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true)
    } else {
      cb(new BadRequestException('The file must be an image'), false)
    }
  }
}
