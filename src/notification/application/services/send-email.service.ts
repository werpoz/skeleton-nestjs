/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { Notification } from 'src/notification/domain/Notification';
import { ResendEmailProvider } from 'src/notification/infrastructure/providers/resend-emai.provider';

@Injectable()
export class SendEmailNotificationService {
  constructor(private readonly emailProvider: ResendEmailProvider) {}

  async send(notification: Notification): Promise<void> {
    await this.emailProvider.sendEmail(
      notification.email,
      notification.message,
    );
  }
}
