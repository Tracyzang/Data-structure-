var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  function helper(current, startIndex, currentSum) {
    if (currentSum === target) {
      result.push(current);
      return;
    }

    if (currentSum > target) return;

    for (var i = startIndex; i < candidates.length; i++) {
      if (i !== startIndex && candidates[i] === candidates[i - 1]) continue;
      helper(current.concat(candidates[i]), i + 1, currentSum + candidates[i]);
    }
  }

  helper([], 0, 0);
  return result;
};
