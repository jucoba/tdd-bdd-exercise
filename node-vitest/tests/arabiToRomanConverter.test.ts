import { describe, it, expect } from 'vitest';

import { arabicToRoman } from '../src/romanConverter';

describe('Arabic to Roman Numeral Converter', () => {
  it('should convert 2 to "II"', () => {
    expect(arabicToRoman(2)).toBe("II");
  });

  it('should convert 3 to "III"', () => {
    expect(arabicToRoman(3)).toBe("III");
  });

  it('should convert 4 to "IV"', () => {
    expect(arabicToRoman(4)).toBe("IV");
  });
});