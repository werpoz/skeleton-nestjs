/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */

import { Filter } from './Filter';

export class Filters {
  readonly filters: Filter[];

  constructor(filters: Filter[]) {
    this.filters = filters;
  }

  static fromValues(filters: Array<Map<string, string>>): Filters {
    return new Filters(filters.map(Filter.fromValues));
  }

  static none(): Filters {
    return new Filters([]);
  }
}
