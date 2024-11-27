/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { PrismaClient } from '@prisma/client';
import { AuthUserRepository } from '../../domain/repository/AuthUser.repository';
import { AuthUser } from '../../domain/AuthUser';
import { Injectable } from '@nestjs/common';
import { AuthEmail } from '../../domain/AuthEmail.vo';
import { AuthUsername } from '../../domain/AuthUsername.vo';
import { AuthPassword } from '../../domain/AuthPassword.vo';

const prisma = new PrismaClient();

@Injectable()
export class PrismaAuthUserRepository implements AuthUserRepository {
  async findByEmailOrUsername(
    emailOrUsername: string,
  ): Promise<AuthUser | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    if (!user) return null;

    return new AuthUser(
      new AuthEmail(user.email),
      new AuthUsername(user.username),
      new AuthPassword(user.password),
    );
  }

  async findByEmail(email: string): Promise<AuthUser | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }],
      },
    });

    if (!user) return null;

    return new AuthUser(
      new AuthEmail(user.email),
      new AuthUsername(user.username),
      new AuthPassword(user.password),
    );
  }

  async save(user: AuthUser): Promise<void> {
    await prisma.user.create({
      data: {
        email: user.email.value!,
        username: user.username.value!,
        password: user.password.value!,
      },
    });
  }
}
