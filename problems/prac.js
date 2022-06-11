
// This solution runs in O(n) time. There is a more performant solution that uses hashsort on the input array to
// partition it into 2 sides on the 0's and using the length of both paritioned sides to find the total number of pos and neg
// This solution runs in O(log(n)) time

const points = [40, 100, 1, 5, 25, 10];

var bfs = function(v, all_pairs, visited) {
  var q = [];
  var current_group = [];
  var i, nextVertex, pair;
  var length_all_pairs = all_pairs.length;
  q.push(v);
  while (q.length > 0) {
    v = q.shift();
    if (!visited[v]) {
      visited[v] = true;
      current_group.push(v);
      // go through the input array to find vertices that are
      // directly adjacent to the current vertex, and put them
      // onto the queue
      for (i = 0; i < length_all_pairs; i += 1) {
        pair = all_pairs[i];
        if (pair[0] === v && !visited[pair[1]]) {
          q.push(pair[1]);
        } else if (pair[1] === v && !visited[pair[0]]) {
          q.push(pair[0]);
        }
      }
    }
  }
  // return everything in the current "group"
  return current_group;
};

var pairs = [
  ["a2", "a5"],
  ["a3", "a6"],
  ["a4", "a5"],
  ["a7", "a9"]
];

var groups = [];
var i, k, length, u, v, src, current_pair;
var visited = {};

// main loop - find any unvisited vertex from the input array and
// treat it as the source, then perform a breadth first search from
// it. All vertices visited from this search belong to the same group
for (i = 0, length = pairs.length; i < length; i += 1) {
  current_pair = pairs[i];
  u = current_pair[0];
  v = current_pair[1];
  src = null;
  if (!visited[u]) {
    src = u;
  } else if (!visited[v]) {
    src = v;
  }
  if (src) {
    // there is an unvisited vertex in this pair.
    // perform a breadth first search, and push the resulting
    // group onto the list of all groups
    groups.push(bfs(src, pairs, visited));
  }
}


const connectedComponentsCount = (graph) => {
  let visited = new Set();
  let components = 0;
  for(let node in graph) {
    if(dfs(graph, current, visited) === true) {
      components++;
    }
  }
}

const dfs = (graph, current, visited) => {
  if(visited.has(String(current))) { return false}

  visited.push(current)
  for(let neighbor of graph[current]) {
    dfs(graph, neighbor, visited);
  }

  return true

 }




//Solve the conected components porblem. count how many connected componenets are in this matrix
// []
//
//
//
//
//

console.log(groups);