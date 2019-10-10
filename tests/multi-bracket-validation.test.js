'use strict';

const multiBracketValidation = require('../challenges/multi-bracket-validation/multi-brack-validation');

describe('Multi-type Bracket Validation', () => {

  it('returns true if the brackets match together', () => {
    expect(multiBracketValidation('[](){}')).toBe(true);
    expect(multiBracketValidation('[a](b){c}')).toBe(true);
    expect(multiBracketValidation('{[(some text)]}')).toBe(true);
    expect(multiBracketValidation('')).toBe(true);
  });

  it('returns false if the brackets dont match', () => {
    expect(multiBracketValidation('[](){')).toBe(false);
    expect(multiBracketValidation('[(}{)')).toBe(false);
    expect(multiBracketValidation('{[(]}')).toBe(false);
    expect(multiBracketValidation('[]]]{')).toBe(false);
  });

});