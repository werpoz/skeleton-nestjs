/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
export class ErrorDomain extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}