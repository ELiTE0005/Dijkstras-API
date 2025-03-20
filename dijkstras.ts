interface neighbourss {
    [name: string]: number;
}
  
export default function dijkstra(graph: Record<string, neighbourss>, start: string, end: string): string[] {

    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const queue: string[] = [];
  
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
    while (queue.length > 0) {

      const shortestVertex = queue.sort((a, b) => distances[a] - distances[b]).shift()!;
for (const neighbours in graph[shortestVertex]) {
        const distance = graph[shortestVertex][neighbours];
        const alt = distances[shortestVertex] + distance;


        if (alt < distances[neighbours]) {
          distances[neighbours] = alt;
          previous[neighbours] = shortestVertex;
        }
      }
    }
  
    const path: string[] = [];
    let current: string | null = end;
    while (current) {
      path.unshift(current);
      current = previous[current];
    }
    return path;
}


