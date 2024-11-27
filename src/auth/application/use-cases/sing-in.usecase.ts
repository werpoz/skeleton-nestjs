/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUserRepository } from '../../domain/repository/AuthUser.repository';
import { AuthUser } from '../../domain/AuthUser';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SingInAuthUseCase {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private readonly authUserRepository: AuthUserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(email: string, pass: string) {
    const authUser: AuthUser | null =
      await this.authUserRepository.findByEmail(email);

    if (authUser?.password.value !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: authUser.email, username: authUser.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
