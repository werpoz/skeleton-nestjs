/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Inject, Injectable } from '@nestjs/common';
import { AuthUserRepository } from '../../domain/repository/AuthUser.repository';
import { AuthUser } from '../../domain/AuthUser';
import { AuthEmail } from '../../domain/AuthEmail.vo';
import { AuthUsername } from '../../domain/AuthUsername.vo';
import { AuthPassword } from '../../domain/AuthPassword.vo';
import { AuthUserAlreadyExistsException } from '../../domain/exceptions/AuthUserAlreadyExistsException';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class RegisterAuthUseCase {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private readonly authUserRepository: AuthUserRepository,
    private eventEmitter: EventEmitter2,
  ) {}

  async execute(username: string, email: string, password: string) {
    const authEmail = new AuthEmail(email);
    const authUsername = new AuthUsername(username);
    const authPassword = new AuthPassword(password);

    const availableAuthUser: AuthUser | null =
      await this.authUserRepository.findByEmailOrUsername(email);

    if (availableAuthUser) {
      throw new AuthUserAlreadyExistsException();
    }

    this.eventEmitter.emit('auth.created', { username, email });

    const auth: AuthUser = new AuthUser(authEmail, authUsername, authPassword);
    return await this.authUserRepository.save(auth);
  }
}
