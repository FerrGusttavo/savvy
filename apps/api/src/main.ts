import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const envService = app.get(EnvService)
  const PORT = envService.get('PORT')

  const config = new DocumentBuilder()
    .setTitle('Savvy API')
    .setDescription('API documentation for Savvy')
    .setVersion('1.0')
    .addTag('savvy')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory())

  await app.listen(PORT)
}
bootstrap()
