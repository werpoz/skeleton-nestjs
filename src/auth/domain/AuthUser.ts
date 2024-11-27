/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { AuthEmail } from './AuthEmail.vo';
import { AuthUsername } from './AuthUsername.vo';
import { AuthPassword } from './AuthPassword.vo';

export class AuthUser {
  constructor(
    private readonly _email: AuthEmail,
    private readonly _username: AuthUsername,
    private readonly _password: AuthPassword,
  ) {}

  public get email(): AuthEmail {
    return this._email;
  }

  public get username(): AuthUsername {
    return this._username;
  }

  public get password(): AuthPassword {
    return this._password;
  }
}
