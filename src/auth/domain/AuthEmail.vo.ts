/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { StringValueObject } from 'src/shared/domain/value-object/StringValueObject';
import { AuthUserEmailException } from './exceptions/AuthUserEmailException';

export class AuthEmail extends StringValueObject {
  private static readonly emailRegex: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(value: string) {
    super(value);
    this.validateEmail(value);
  }

  private validateEmail(value: string): void {
    if (!AuthEmail.emailRegex.test(value)) {
      throw new AuthUserEmailException(`Invalid email address: ${value}`);
    }
  }
}
