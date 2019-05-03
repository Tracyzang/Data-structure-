function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);

  var length = candidates.length;
  var res = [];
  search(0, [], target);
  return res;

  function search(idx, prefix, target) {
    if (target === 0) res.push(prefix.slice());
    if (idx === length) return;
    if (target <= 0) return;

    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx]);
    prefix.pop();
    search(idx + 1, prefix, target);
  }
}

var combinationSum3 = function(k, n) {
  var res = [];
  helper([], n, 1);
  return res;
  function helper(temp, need, start) {
    if (temp.length === k && need === 0) {
      res.push(temp.slice());
    } else {
      for (var i = start; i <= 9; i++) {
        if (i > need) continue;
        temp.push(i);
        helper(temp, need - i, i + 1);
        temp.pop();
      }
    }
  }
};
