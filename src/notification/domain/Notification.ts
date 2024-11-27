/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

export class Notification {
  constructor(
    private readonly _email: string,
    private readonly _message: string,
  ) {}

  public get message(): string {
    return this._message;
  }

  public get email(): string {
    return this._email;
  }
}
