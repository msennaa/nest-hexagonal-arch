import { Module } from '@nestjs/common';
import { SendMainWithTweetsJob } from './send-mail-with-tweets.job';

@Module({
  providers: [SendMainWithTweetsJob],
})
export class MailingModule {}
