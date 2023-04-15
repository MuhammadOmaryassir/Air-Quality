import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AirModule } from './air/air.module';
import { SchedulerModule } from './cron/cron.module';

const uri = `mongodb+srv://air:air123air@air.9xowunq.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(uri),AirModule,SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
