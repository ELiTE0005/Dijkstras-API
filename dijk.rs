use std::collections::{HashMap, BinaryHeap};
use std::cmp::Ordering;

type Graph = HashMap<String, HashMap<String, u32>>;

#[derive(Eq, PartialEq)]
struct Node {
    name: String,
    cost: u32,
}

impl Ord for Node {
    fn cmp(&self, other: &Self) -> Ordering {
        other.cost.cmp(&self.cost) // Reverse for min-heap
    }
}

impl PartialOrd for Node {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

pub fn dijkstra(graph: &Graph, start: &str, end: &str) -> Vec<String> {
    let mut distances: HashMap<String, u32> = HashMap::new();
    let mut previous: HashMap<String, Option<String>> = HashMap::new();
    let mut priority_queue = BinaryHeap::new();

    for node in graph.keys() {
        distances.insert(node.clone(), u32::MAX);
        previous.insert(node.clone(), None);
    }
    distances.insert(start.to_string(), 0);
    priority_queue.push(Node { name: start.to_string(), cost: 0 });

    while let Some(Node { name, cost }) = priority_queue.pop() {
        if name == end {
            break;
        }
        if cost > *distances.get(&name).unwrap_or(&u32::MAX) {
            continue;
        }

        if let Some(neighbors) = graph.get(&name) {
            for (neighbor, &weight) in neighbors {
                let new_cost = cost + weight;
                if new_cost < *distances.get(neighbor).unwrap_or(&u32::MAX) {
                    distances.insert(neighbor.clone(), new_cost);
                    previous.insert(neighbor.clone(), Some(name.clone()));
                    priority_queue.push(Node { name: neighbor.clone(), cost: new_cost });
                }
            }
        }
    }

    let mut path = Vec::new();
    let mut current = end.to_string();
    while let Some(prev) = previous.get(&current) {
        path.push(current.clone());
        if let Some(prev_node) = prev {
            current = prev_node.clone();
        } else {
            break;
        }
    }
    path.reverse();
    path
}
