import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security headers
  app.use(helmet());

  // Cookie parsing (for auth tokens)
  app.use(cookieParser());

  // Request size limits
  app.use(require('express').json({ limit: '1mb' }));
  app.use(require('express').urlencoded({ extended: true, limit: '1mb' }));

  // CORS — only our frontends
  app.enableCors({
    origin: [
      'https://beyondbeach.com',
      'https://www.beyondbeach.com',
      'https://admin.beyondbeach.com',
      'https://portal.beyondbeach.com',
      ...(process.env.NODE_ENV !== 'production'
        ? ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002']
        : []),
    ],
    credentials: true,
  });

  // Input validation — strip unknown fields, reject if unexpected
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // API prefix
  app.setGlobalPrefix('api/v1');

  // Swagger docs — dev only
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('BeyondBeach API')
      .setDescription('Backend API — Checkfront, Kyte, bookings, auth, CMS')
      .setVersion('1.0')
      .addBearerAuth()
      .addCookieAuth('bb_access')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`BeyondBeach API running on port ${port}`);
}
bootstrap();
