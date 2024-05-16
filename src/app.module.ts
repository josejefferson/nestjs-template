import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { ormConfig } from './config/orm.config'
import { staticConfig } from './config/static.config'
import { ImagesModule } from './modules/images/images.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ServeStaticModule.forRoot(staticConfig),
    AuthModule,
    UsersModule,
    ImagesModule
  ]
})
export class AppModule {}
