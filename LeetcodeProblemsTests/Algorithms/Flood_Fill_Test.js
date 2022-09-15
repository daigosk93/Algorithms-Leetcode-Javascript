const assert = require("assert");
const floodFill = require("../../LeetcodeProblems/Algorithms/Flood_Fill").floodFill;

function test() {
  assert.deepEqual(
    [[2, 2, 2], [2, 2, 0], [2, 0, 1]],
    floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)
  );
  assert.deepEqual(
    [[2, 2, 0, 1], [2, 2, 1, 3], [0, 2, 2, 2], [2, 2, 0, 3]],
    floodFill([[3, 3, 0, 1], [2, 3, 1, 3], [0, 3, 3, 2], [2, 3, 0, 3]], 2, 1, 2)
  );
}

module.exports.test = test;
