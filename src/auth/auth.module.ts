/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Module } from '@nestjs/common';
import { AuthProvider } from './infrastructure/providers/auth.provider';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { AuthService } from './application/services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [...AuthProvider],
  exports: [AuthService],
})
export class AuthModule {}
