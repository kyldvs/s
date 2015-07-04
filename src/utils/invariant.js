/**
 * @flow
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 */
export default function(
  condition: mixed,
  format: string,
  ...args: Array<any>
): void {
  if (!condition) {
    var index = 0;
    var message = format.replace(/%s/g, () => args[index++]);
    var error = new Error('Invariant Violation: ' + message);
    (error: any).framesToPop = 1;
    throw error;
  }
}
