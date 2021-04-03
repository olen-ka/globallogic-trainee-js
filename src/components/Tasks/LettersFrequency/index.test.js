import { calculateFrequency } from './index';

describe('calculateFrequency', () => {
  test('empty string', () => {
    expect(calculateFrequency('')).toEqual([]);
  });

  test('single letter', () => {
    expect(calculateFrequency('a')).toEqual([
      {
        letter: 'a',
        frequency: 100,
      },
    ]);
  });

  test('two letters', () => {
    expect(calculateFrequency('ab')).toEqual([
      {
        letter: 'a',
        frequency: 50,
      },
      {
        letter: 'b',
        frequency: 50,
      },
    ]);
  });

  test('round to one decimal place', () => {
    expect(calculateFrequency('abc')).toEqual([
      {
        letter: 'a',
        frequency: 33.3,
      },
      {
        letter: 'b',
        frequency: 33.3,
      },
      {
        letter: 'c',
        frequency: 33.3,
      },
    ]);
  });

  test('case insensitive', () => {
    expect(calculateFrequency('aABC')).toEqual([
      {
        letter: 'a',
        frequency: 50,
      },
      {
        letter: 'b',
        frequency: 25,
      },
      {
        letter: 'c',
        frequency: 25,
      },
    ]);
  });

  test('only english letters', () => {
    expect(calculateFrequency('цей текст буде проігноровано')).toEqual([]);
  });

  test('without numbers and other symbolss', () => {
    expect(calculateFrequency('012345 .,/-+')).toEqual([]);
  });

  test('sort letters in ascending order', () => {
    expect(calculateFrequency('za')).toEqual([
      {
        letter: 'a',
        frequency: 50,
      },
      {
        letter: 'z',
        frequency: 50,
      },
    ]);
  });

  test('lorem', () => {
    const text =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    const expectedResult = [
      { letter: 'a', frequency: 6.2 },
      { letter: 'b', frequency: 1.1 },
      { letter: 'c', frequency: 2.1 },
      { letter: 'd', frequency: 3.4 },
      { letter: 'e', frequency: 12.6 },
      { letter: 'f', frequency: 1.3 },
      { letter: 'g', frequency: 2.4 },
      { letter: 'h', frequency: 3 },
      { letter: 'i', frequency: 8.1 },
      { letter: 'k', frequency: 1.5 },
      { letter: 'l', frequency: 4.7 },
      { letter: 'm', frequency: 4.1 },
      { letter: 'n', frequency: 8.1 },
      { letter: 'o', frequency: 5.4 },
      { letter: 'p', frequency: 4.1 },
      { letter: 'r', frequency: 5.1 },
      { letter: 's', frequency: 8.4 },
      { letter: 't', frequency: 9.2 },
      { letter: 'u', frequency: 3.6 },
      { letter: 'v', frequency: 1.1 },
      { letter: 'w', frequency: 1.3 },
      { letter: 'x', frequency: 0.4 },
      { letter: 'y', frequency: 2.8 },
    ];

    expect(calculateFrequency(text)).toEqual(expectedResult);
  });
});
