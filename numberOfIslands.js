//Using DFS might stack overflow
var numIslands = function(grid) {
  var h = grid.length;
  var w = h && grid[0].length;
  console.log(w);
  let count = 0;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i === h || j === w) return;
    if (grid[i][j] === "0") return;
    grid[i][j] = "0";
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === "0") continue;
      count++;
      dfs(i, j);
    }
  }

  return count;
};

//using UnionFind
function UnionFind(grid) {
  this.count = 0;
  this.father = new Array(grid.length * grid[0].length);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const k = i * grid[0].length + j;
      this.father[k] = k;
      if (grid[i][j] === "1") {
        this.count++;
      }
    }
  }
}

UnionFind.prototype.find = function(x) {
  if (this.father[x] === x) {
    return x;
  }
  this.father[x] = this.find(this.father[x]);
  return this.father[x];
};

UnionFind.prototype.union = function(a, b) {
  const root_a = this.find(a);
  const root_b = this.find(b);
  if (root_a !== root_b) {
    this.father[root_a] = root_b;
    this.count--;
  }
};

const Dx = [0, 1, -1, 0];
const Dy = [1, 0, 0, -1];

function inbound(grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

var numIslands = function(grid) {
  if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
    return 0;
  }

  const unionFind = new UnionFind(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        for (let k = 0; k < 4; k++) {
          let x = i + Dx[k];
          let y = j + Dy[k];
          if (inbound(grid, x, y) && grid[x][y] === "1") {
            unionFind.union(x * grid[0].length + y, i * grid[0].length + j);
          }
        }
      }
    }
  }
  return unionFind.count;
};
