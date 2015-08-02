/**
 * @providesModule AVLTree
 */

'use strict';

import invariant from 'invariant';

export default class AVLTree {
  constructor(compare) {
    // Build a compare function that can handle nodes, null nodes are treated
    // as positive infinity
    this._compare = (n1, n2) => {
      if (n1 && n2) {
        return compare(n1.value, n2.value);
      } else if (n1) {
        return -1;
      } else {
        return 1;
      }
    };
  }

  at(index) {
    invariant(false);
  }

  get(index) {
    invariant(false);
  }
}
