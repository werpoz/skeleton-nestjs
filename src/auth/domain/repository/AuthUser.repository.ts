/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { AuthUser } from '../AuthUser';

export interface AuthUserRepository {
  findByEmailOrUsername(emailOrUsername: string): Promise<AuthUser | null>;
  findByEmail(email: string): Promise<AuthUser | null>;
  save(user: AuthUser): Promise<void>;
}
