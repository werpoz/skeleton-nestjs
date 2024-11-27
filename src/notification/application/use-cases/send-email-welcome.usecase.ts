/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { SendEmailNotificationService } from '../services/send-email.service';
import { Notification } from 'src/notification/domain/Notification';

@Injectable()
export class SendWelcomeEmailUseCase {
  constructor(
    private readonly sendEmailService: SendEmailNotificationService,
  ) {}

  async execute(userEmail: string): Promise<void> {
    const notification = new Notification(
      userEmail.toString(),
      'Welcome to the platform!',
    );

    await this.sendEmailService.send(notification);
  }
}