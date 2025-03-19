interface neighbourss {
    [name: string]: number;
}

// This defines an interface for the graph's neighbourss.
// It means that each node (vertex) in the graph will have neighboursing nodes mapped to their respective distances (numbers).
  
export default function dijkstra(graph: Record<string, neighbourss>, start: string, end: string): string[] {
    
// The function dijkstra finds the shortest path between two nodes (start and end).
// graph: A record (object) where each key is a node, and the value is another object representing its neighbourss and their distances.
// start: The starting node.
// end: The destination node.
// Returns an array of strings representing the shortest path.

    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const queue: string[] = [];

// distances: Stores the shortest known distance from start to each node.
// previous: Stores the previous node for each node to reconstruct the shortest path later.
// queue: A list of nodes that need to be processed.
  
    for (const vertex in graph) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.unshift(vertex);
      } else {
        distances[vertex] = Infinity;
        queue.push(vertex);
      }
      previous[vertex] = null;
    }

// Loop through all nodes in the graph.
// Set the distance of start to 0 (since it's the starting point).
// Set all other nodes' distances to Infinity (they are unreachable initially).
// Store null in previous for all nodes (no known previous nodes yet).
// Add all nodes to queue.
  
    while (queue.length > 0) {

// Keep processing nodes until the queue is empty.


      const shortestVertex = queue.sort((a, b) => distances[a] - distances[b]).shift()!;

// Sort the queue based on the smallest distance.
// Remove the closest node (shift() gets the first element).
// ! is used to tell TypeScript that shift() won't return undefined.
      
for (const neighbours in graph[shortestVertex]) {
        const distance = graph[shortestVertex][neighbours];
        const alt = distances[shortestVertex] + distance;

// Loop through each neighbours of the current shortest node.
// Get the distance between the current node and the neighbours.
// Calculate the alternative distance (alt):
// alt = current distance + neighbours's distance.


        if (alt < distances[neighbours]) {
          distances[neighbours] = alt;
          previous[neighbours] = shortestVertex;
        }
      }
    }

// If this new alternative distance (alt) is shorter than the recorded distance:
// Update distances[neighbours].
// Update previous[neighbours] to track the path.
  
    const path: string[] = [];
    let current: string | null = end;
    while (current) {
      path.unshift(current);
      current = previous[current];
    }
    return path;
}

// Start from end and trace back using previous to reconstruct the path.
// Add each node to the path array.
// Stop when current is null (reached the start).
// returns the shortest path as an array of nodes


