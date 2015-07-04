/**
 * @flow
 */

type Node<T> = {
  bf: number,
  height: number,
  size: number,

  left: Node<T>,
  right: Node<T>,

  value: T,
};

export default class AVLTree<T> {
  _compare: (one: ?Node<T>, two: ?Node<T>) => number;
  _root: ?Node<T>;

  constructor(compare: (one: T, two: T) => number) {
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

  // TODO: Implement the avl tree
}
