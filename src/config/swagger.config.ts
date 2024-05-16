import { DocumentBuilder, OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger'

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('authentication', 'Authentication')
  .addTag('images', 'Images')
  .addTag('users', 'Users')
  .build()

export const swaggerOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    requestSnippetsEnabled: true,
    requestSnippets: { defaultExpanded: false },
    defaultModelsExpandDepth: -1,
    docExpansion: 'none'
  }
}

export function parseSwaggerDocument(document: OpenAPIObject) {
  for (const path in document.paths) {
    for (const method in document.paths[path]) {
      type Method = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'
      const operation = document.paths[path][method as Method]
      if (!operation?.parameters) continue

      // Remove Bearer authentication on public routes (/src/auth/auth.decorator.ts)
      if (operation.security?.includes('public' as any)) {
        operation.security = []
      }
    }
  }
}
