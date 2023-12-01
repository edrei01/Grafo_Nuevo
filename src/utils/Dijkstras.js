import { shortestDistNode } from "./shortestDistNode";
import { statesGraph } from "./statesGraph";

const dijkstraAlgorithm  = (initial, final) => {
  const graph = { ...statesGraph };

  let distances = {};
  distances[final] = "Infinity";
  distances = { ...distances, ...graph[initial] };

  let parents = { endNode: null };
  Object.keys(graph[initial]).forEach((child) => {
    parents[child] = initial;
  });

  const visited = [];
  let node = shortestDistNode(distances, visited);

  while (node) {
    const currentNode = node; // Capturar el valor actual de 'node'
    const distance = distances[currentNode];
    const children = graph[currentNode];

    Object.keys(children).forEach((child) => {
      if (String(child) !== String(initial)) {
        const newDistance = distance + children[child];
        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = currentNode;
        }
      }
    });

    visited.push(currentNode);
    node = shortestDistNode(distances, visited);
  }

  const shortestPath = [final];
  let parent = parents[final];

  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }

  shortestPath.reverse();

  const results = {
    distance: distances[final],
    path: shortestPath,
  };

  return results;
};

export { dijkstraAlgorithm };
