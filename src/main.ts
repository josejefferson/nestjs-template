import * as dotenv from 'dotenv'
dotenv.config()

import './config/crud.config'

import { ClassSerializerInterceptor } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { AppModule } from './app.module'
import { parseSwaggerDocument, swaggerConfig, swaggerOptions } from './config/swagger.config'
import { validationPipe } from './config/validation.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(validationPipe)
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  app.use(helmet())
  app.use(cookieParser())
  app.setGlobalPrefix('api')

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  parseSwaggerDocument(document)
  SwaggerModule.setup('api', app, document, swaggerOptions)

  await app.listen(process.env.PORT || 3000)
}
void bootstrap()

process.on('uncaughtException', console.error)
