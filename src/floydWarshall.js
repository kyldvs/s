/**
 * @providesModule floydWarshall
 */

'use strict';

/**
 * Given an adjacency matrix this function return a matrix containing the
 * distance of the shortest path between each pair of vertices. Infinity if
 * there is no path, and -Infinity if there is a negative cycle.
 *
 * matrix should be a square matrix where each element, matrix[u][v], represents
 * the distance of the edge from vertex u to vertex v. Infinity if there is no
 * such edge. 0 if u and v are the same vertex.
 */
function floydWarshall(matrix) {
  const d = [];
  const n = matrix.length;

  // Initialization
  for (let u = 0; u < n; u++) {
    d.push([]);
    for (let v = 0; v < n; v++) {
      d[u].push(matrix[u][v]);
    }
    d[u][u] = 0;
  }

  // Update distances
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (d[i][k] + d[k][j] < d[i][j]) {
          d[i][j] = d[i][k] + d[k][j];
        }
      }
    }
  }

  // Check for negative cycles
  for (let u = 0; u < n; u++) {
    if (d[u][u] < 0) {
      for (let v = 0; v < n; v++) {
        if (d[v][u] !== Infinity) {
          d[v][u] = -Infinity;
        }
      }
    }
  }

  return d;
}

export default floydWarshall;
