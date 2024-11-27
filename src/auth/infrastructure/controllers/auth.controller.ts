/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.authService.createAuthUser(
      body.username,
      body.email,
      body.password,
    );
  }

  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    return this.authService.loginAuthUser(body.username, body.password);
  }
}
