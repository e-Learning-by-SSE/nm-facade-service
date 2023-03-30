import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { InternalModule } from './internal/internal.module';

@Module({
  imports: [TasksModule, InternalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
