/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { RegisterAuthUseCase } from '../use-cases/register.usecase';
import { SingInAuthUseCase } from '../use-cases/sing-in.usecase';

@Injectable()
export class AuthService {
  constructor(
    private readonly registerAuthUserCase: RegisterAuthUseCase,
    private readonly singInAuthUseCase: SingInAuthUseCase,
  ) {}

  async createAuthUser(
    username: string,
    email: string,
    password: string,
  ): Promise<void> {
    return this.registerAuthUserCase.execute(username, email, password);
  }

  async loginAuthUser(
    email: string,
    password: string,
  ): Promise<Record<string, unknown>> {
    return this.singInAuthUseCase.execute(email, password);
  }
}
