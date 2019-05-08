var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right;
};

//Interger to Roman
var intToRoman = function(num) {
  var map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let str = "";
  for (let i = 0; i < map.length; i++) {
    var [val, char] = map[i];
    if (num >= val) {
      while (num >= val) {
        num -= val;
        str += char;
      }
    }
  }
  return str;
};

//roman to Interger
var romanToInt = function(s) {
  if (!s || s.length === 0) return 0;
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);
  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    var curr = map.get(s[i]);
    var prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }
    i--;
  }
  return result;
};
