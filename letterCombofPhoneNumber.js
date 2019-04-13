var letterCombinations = function(digits) {
  //backtracking
  if (!digits) return [];
  var res = [];
  var map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  if (digits.length === 1) return map[digits];
  let set1 = letterCombinations(digits.substring(0, 1));
  let set2 = letterCombinations(digits.substring(1));

  for (let i = 0; i < set1.length; i++) {
    console.log(set1.length);
    for (let j = 0; j < set2.length; j++) {
      console.log("i");
      console.log(i);
      console.log("set1[i]");
      console.log(set1[i]);
      res.push(set1[i] + set2[j]);
    }
  }
  return res;
};

//using backTracking function
var letterCombinations = function(digits) {
  //backtracking
  if (!digits) return [];
  var res = [];
  var map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  function backTracking(comb, next_digits) {
    if (!next_digits.length) res.push(comb);
    else {
      var digit = next_digits.substring(0, 1);
      var letters = map[digit];
      for (let i = 0; i < letters.length; i++) {
        var letter = map[digit].substring(i, i + 1);
        backTracking(comb + letter, next_digits.substring(1));
      }
    }
  }

  backTracking("", digits);
  return res;
};
