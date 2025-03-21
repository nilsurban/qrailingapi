import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS aktivieren, damit das Frontend mit dem Backend kommunizieren kann
  app.enableCors({
    origin: 'http://localhost:3001', // Erlaubt Anfragen von deinem React-Frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Falls du Cookies oder Authentifizierung nutzt
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
