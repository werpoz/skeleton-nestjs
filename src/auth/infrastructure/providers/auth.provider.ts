/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { AuthService } from '../../application/services/auth.service';
import { RegisterAuthUseCase } from '../../application/use-cases/register.usecase';
import { SingInAuthUseCase } from '../../application/use-cases/sing-in.usecase';
import { PrismaAuthUserRepository } from '../repository/PrismaAuthUser.repository';

export const AuthProvider = [
  {
    provide: 'AUTH_REPOSITORY',
    useClass: PrismaAuthUserRepository,
  },
  AuthService,
  RegisterAuthUseCase,
  SingInAuthUseCase,
];
