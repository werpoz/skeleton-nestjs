/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { SendWelcomeEmailUseCase } from 'src/notification/application/use-cases/send-email-welcome.usecase';

@Injectable()
export class UserRegisteredListener {
  constructor(
    private readonly sendWelcomeEmailUseCase: SendWelcomeEmailUseCase,
  ) {}

  @OnEvent('auth.created')
  async handleUserRegisteredEvent(event: {
    username: string;
    email: string;
  }): Promise<void> {
    await this.sendWelcomeEmailUseCase.execute(event.email);
  }
}
