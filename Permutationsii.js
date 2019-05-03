var permuteUnique = function(nums) {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a - b);

  const result = [];
  const dfs = (arr, r = []) => {
    if (arr.length === 0) result.push(r);
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;
        dfs(arr.slice(0, i).concat(arr.slice(i + 1)), r.concat([arr[i]]));
      }
    }
  };

  dfs(nums);

  return result;
};

const permuteUnique = nums => {
  const output = [];
  const numsLength = nums.length;
  nums.sort();

  const recurse = (soFar = [], whatsLeft = nums) => {
    if (soFar.length === numsLength) {
      output.push([...soFar]);
    } else {
      for (let i = 0; i < whatsLeft.length; i += 1) {
        if (whatsLeft[i] !== whatsLeft[i - 1]) {
          soFar.push(whatsLeft.splice(i, 1)[0]);
          recurse(soFar, whatsLeft);
          whatsLeft.splice(i, 0, soFar.pop());
        }
      }
    }
  };

  recurse();
  return output;
};

var permuteUnique = function(nums) {
  let result = [];
  let visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  function dfs(nums, current, visited) {
    if (current.length == nums.length) {
      result.push(current);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      dfs(nums, current.concat(nums[i]), visited);
      visited[i] = false;
    }
  }

  dfs(nums, [], visited);
  return result;
};
