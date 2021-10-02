import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(csurf());
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(5000);
}
bootstrap();
