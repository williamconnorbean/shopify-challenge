const regexHelper = require('../../../middleware/validation/util/regex-helper');

describe('isValidInputText test suite', () => {
  test('verifies a string is at least length 1 by default', () => {
    expect(regexHelper.isValidInputText('Testing')).toBe(true);
    expect(regexHelper.isValidInputText('')).toBe(false);
  });

  test('can provide a min length', () => {
    expect(regexHelper.isValidInputText('test', 5)).toBe(false);
    expect(regexHelper.isValidInputText('testing', 5)).toBe(true);
  });

  test('can provide a min and max length', () => {
    expect(regexHelper.isValidInputText('testing', 5, 10)).toBe(true);
    expect(regexHelper.isValidInputText('testing something longer', 5, 10)).toBe(false);
  });

  test('can be used to specify an exact length', () => {
    expect(regexHelper.isValidInputText('tests', 5, 5)).toBe(true);
    expect(regexHelper.isValidInputText('testing something longer', 5, 5)).toBe(false);
  });

  test('allows spaces and other characters', () => {
    expect(regexHelper.isValidInputText('with spaces', 11, 11)).toBe(true);
    expect(regexHelper.isValidInputText('with spaces #1')).toBe(true);
    expect(regexHelper.isValidInputText('other characters are also vaid !@#$%^&*')).toBe(true);
  });
});
