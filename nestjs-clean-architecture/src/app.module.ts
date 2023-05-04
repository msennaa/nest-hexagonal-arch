import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { RouteInMemoryRepository } from './@core/infra/db/in-memory/route-in-memory.repository';

@Module({
  imports: [RoutesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
  ],
})
export class AppModule {}
