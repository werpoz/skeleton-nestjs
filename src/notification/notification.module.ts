/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Module } from '@nestjs/common';
import { SendEmailNotificationService } from './application/services/send-email.service';
import { SendWelcomeEmailUseCase } from './application/use-cases/send-email-welcome.usecase';
import { UserRegisteredListener } from './infrastructure/listeners/user-register.listener';
import { ResendEmailProvider } from './infrastructure/providers/resend-emai.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [
    SendEmailNotificationService,
    SendWelcomeEmailUseCase,
    ResendEmailProvider,
    UserRegisteredListener,
  ],
  exports: [SendWelcomeEmailUseCase],
})
export class NotificationModule {}
