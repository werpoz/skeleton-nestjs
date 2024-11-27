/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailProvider {
  async sendEmail(email: string, message: string): Promise<void> {
    console.log(`Sending email to ${email}: ${message}`);
  }
}
