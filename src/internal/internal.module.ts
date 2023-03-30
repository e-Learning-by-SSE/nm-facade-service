import { Module } from '@nestjs/common';
import { InternalService } from './internal.service';
import { InternalsController } from './internal.controller';

@Module({
  controllers: [InternalsController],
  providers: [InternalService],
})
export class InternalModule {}
