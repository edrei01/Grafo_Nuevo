const shortestDistNode = (distances, visited) => {
    let shortest = null;
  
    for (let currentNode in distances) {
      const currentIsShortest =
        shortest === null || distances[currentNode] < distances[shortest];
      if (currentIsShortest && !visited.includes(currentNode)) {
        shortest = currentNode;
      }
    }
    return shortest;
  };
  
  export { shortestDistNode };
  