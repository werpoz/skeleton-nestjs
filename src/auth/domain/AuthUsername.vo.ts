/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { StringValueObject } from 'src/shared/domain/value-object/StringValueObject';
import { AuthUsernameException } from './exceptions/AuthUsernameException';

export class AuthUsername extends StringValueObject {
  private static readonly usernameRegex: RegExp = /^[a-zA-Z ]+$/;
  constructor(value: string) {
    super(value);
    this.validateAuthUsername(value);
  }

  private validateAuthUsername(value: string): void {
    if (!AuthUsername.usernameRegex.test(value)) {
      throw new AuthUsernameException(`Invalid username: ${value}`);
    }
  }
}
