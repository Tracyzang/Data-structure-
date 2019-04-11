var searchMatrix = function(matrix, target) {
  var binarySearch = (arr, target) => {
    if (!arr || arr.length === 0) return false;
    let low = 0;
    let high = arr.length - 1;
    let middle;
    while (low + 1 < high) {
      middle = low + Math.floor((high - low) / 2);
      if (arr[middle] === target) return true;
      if (arr[middle] < target) {
        low = middle;
      } else {
        high = middle;
      }
    }
    if (arr[low] === target) return true;
    if (arr[high] === target) return true;
    return false;
  };

  if (!matrix || matrix.length === 0) return false;
  let start = 0;
  let end = matrix.length - 1;
  let mid;
  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);
    if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[mid].length - 1] >= target
    ) {
      return binarySearch(matrix[mid], target);
    } else if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[mid].length - 1] <= target
    ) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (
    matrix[start][0] <= target &&
    matrix[start][matrix[start].length - 1] >= target
  )
    return binarySearch(matrix[start], target);
  if (matrix[end][0] <= target && matrix[end][matrix[end].length - 1] >= target)
    return binarySearch(matrix[end], target);
  return false;
};
