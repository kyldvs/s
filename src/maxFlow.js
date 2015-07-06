/**
 * @providesModule maxFlow
 */

'use strict';

/**
 * @param s is the source vertex
 * @param t is the sink vertex
 * @param capacity [u][v] is the capacity of edge u, v, must be an integer
 * @return the integral max flow of the graph
 */
function maxFlow(s, t, capacity) {
  const n = capacity.length;

  // compute adjacency list, array of sets
  const adjList = [];
  for (let i = 0; i < n; i++) {
    adjList.push(new Set());
    for (let j = 0; j < n; j++) {
      if (i !== j && capacity[i][j] > 0) {
        adjList[i].add(j);
      }
    }
  }

  // residual graph that contains the flows we are using, the capacity of edge
  // [u, v] at any point in time is capacity[u][v] - residualGraph[u][v]. Note
  // that when pushing flow through the residual graph along edge [u, v] a
  // reverse entry is added to the residual graph with the negative flow value.
  // So when adding x flow to the edge [u, v] the capacity of [u, v] is
  // decreased by x, but the capacity of [v, u] is increased by x (which
  // represents taking away the flow that was just added)
  const residualGraph = [];
  for (let i = 0; i < n; i++) {
    residualGraph.push([]);
    for (let j = 0; j < n; j++) {
      residualGraph[i].push(0);
    }
  }

  // bfs to find paths that can increase flow
  let result = 0;
  let found = true;
  while (found) {
    found = false;
    let minCapacity = Infinity;
    let path = [];
    // TODO
  }

  return result;
}

export default maxFlow;
