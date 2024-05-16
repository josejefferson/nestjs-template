import { HttpStatus, ValidationPipe } from '@nestjs/common'

export const validationPipe = new ValidationPipe({
  whitelist: true,
  transform: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
})
