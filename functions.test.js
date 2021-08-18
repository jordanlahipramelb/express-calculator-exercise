const { getMean, getMedian, getMode } = require('./functions');

describe('get mean', function () {
  test('finds the mean value of an empty array', function () {
    expect(getMean([])).toEqual(0);
  });

  test('finds the mean value of an array of numbers', function () {
    expect(getMean([4, 8, 5, 6, 2])).toEqual(5);
  });
});

describe('get median', function () {
  test('finds the median value of an even set', function () {
    expect(getMedian([3, 5, 4, 4, 1, 1, 2, 3])).toEqual(3);
  });

  test('finds the median value of an odd set', function () {
    expect(getMedian([1, -1, 4])).toEqual(1);
  });
});

describe('get mode', function () {
  test('finds the mode of a set with 2 modes', function () {
    expect(getMode([1, 1, 1, 2, 3, 3, 3])).toEqual([1, 3]);
  });

  test('finds the mode of a set', function () {
    expect(getMode([1, 1, 1, 3, 3])).toEqual([1]);
  });
});
