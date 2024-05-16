import { ServeStaticModuleOptions } from '@nestjs/serve-static'

export const staticConfig: ServeStaticModuleOptions = {
  rootPath: 'files',
  serveRoot: '/api/static/'
}
