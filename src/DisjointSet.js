/**
 * @providesModule DisjointSet
 */

'use strict';

class DisjointSet {
  /**
   * Static method that lets you create a disjoint set using varargs
   */
  static of(...args) {
    return new DisjointSet(args);
  }

  /**
   * Create a disjoint set out of the given elements. Initially each element is
   * its own set.
   */
  constructor(iterable) {
    this._parent = new Map();
    this._rank = new Map();
    this._sets = 0;
    if (iterable) {
      for (let x of iterable) {
        this.add(x);
      }
    }
  }

  /**
   * How many elements are in this structure
   */
  get size() {
    return this._parent.size;
  }

  /**
   * How many disjoint sets are in this structure
   */
  get sets() {
    return this._sets;
  }

  /**
   * Add the element x to this disjoint set structure as its own set. This is a
   * no-op if the set already contains x.
   */
  add(x) {
    if (this.has(x)) {
      return;
    }
    this._parent.set(x, x);
    this._rank.set(x, 0);
    this._sets += 1;
  }

  /**
   * Check if this structure knows about the element x
   */
  has(x) {
    return this._parent.has(x);
  }

  /**
   * Check if x and y are in the same set
   */
  sameSet(x, y) {
    return (
      this.has(x) &&
      this.has(y) &&
      Object.is(this._root(x), this._root(y))
    );
  }

  /**
   * Union the sets x and y are in to create one set
   */
  union(x, y) {
    if (!this.has(x) || !this.has(y)) {
      return;
    }

    const xRoot = this._root(x);
    const yRoot = this._root(y);
    if (!Object.is(xRoot, yRoot)) {
      // merge by rank
      const xRank = this._rank.get(xRoot);
      const yRank = this._rank.get(yRoot);
      if (xRank < yRank) {
        this._parent.set(xRoot, yRoot);
      } else if (yRank < xRank) {
        this._parent.set(yRoot, xRoot);
      } else {
        this._parent.set(xRoot, yRoot);
        this._rank(xRoot, xRank + 1);
      }
      this._sets -= 1;
    }
  }

  /**
   * This searches for the root of x, compressing the path along the way
   */
  _root(x) {
    if (Object.is(this._parent.get(x), x)) {
      return x;
    }

    // path compression
    const root = this._root(this._parent.get(x));
    this._parent.set(x, root);
    return root;
  }
}

export default DisjointSet;
