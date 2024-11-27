/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class ResendEmailProvider {
  async sendEmail(email: string, message: string): Promise<void> {
    const resend = new Resend('re_fuBhEgNQ_AfjodfwrJtS6g5enWgGvGAtQ');
    await resend.emails.send({
      from: 'noreply <noreply@zerveros.com>',
      to: [email],
      subject: 'email test',
      html: message,
    });
  }
}
