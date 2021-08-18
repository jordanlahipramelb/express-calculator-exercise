function getMean(nums) {
  let sum = 0;
  if (nums.length === 0) return 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

function getMedian(nums) {
  let median = 0,
    numsLen = nums.length;
  nums.sort();

  // if length is even
  if (numsLen % 2 === 0) {
    median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
  } else {
    median = nums[(numsLen - 1) / 2];
  }
  return median;
}

function getMode(nums) {
  var modes = [],
    count = [],
    i,
    num,
    maxIndex = 0;

  for (i = 0; i < nums.length; i += 1) {
    num = nums[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxIndex) {
      maxIndex = count[num];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
}
function convertAndValidate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let valToNum = Number(arr[i]);

    if (Number.isNaN(valToNum)) {
      return new Error(`${arr[i]} is not a valid number.`);
    }

    result.push(valToNum);
  }
  return result;
}

module.exports = {
  convertAndValidate,
  getMean,
  getMedian,
  getMode,
};
