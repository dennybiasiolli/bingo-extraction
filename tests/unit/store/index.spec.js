import { defaultState, getters, mutations, actions, modules } from '@/store';

describe('store', () => {
  describe('state', () => {
    it('should have the default state', () => {
      expect(defaultState).toEqual({
        availableNumbers: [...Array(90).keys()].map((i) => i + 1),
        extractedNumbers: [],
      });
    });
  });

  describe('getters', () => {
    const { ascendingExtractedNumbers, reversedExtractedNumbers } = getters;

    it('ascendingExtractedNumbers', () => {
      expect(ascendingExtractedNumbers({ extractedNumbers: [12, 56, 34] }))
        .toEqual([12, 34, 56]);
    });

    it('reversedExtractedNumbers', () => {
      expect(reversedExtractedNumbers({ extractedNumbers: [12, 56, 34] }))
        .toEqual([34, 56, 12]);
    });
  });

  describe('mutations', () => {
    const { extractNumber } = mutations;

    it('ascendingExtractedNumbers', () => {
      jest.spyOn(global.Math, 'random')
        .mockReturnValueOnce(0.123456789)
        .mockReturnValueOnce(0.987654321);
      const state = { ...defaultState };
      expect(state.availableNumbers).toHaveLength(90);
      extractNumber(state);
      expect(state.availableNumbers).toHaveLength(89);
      expect(state.extractedNumbers).toEqual([12]);
      extractNumber(state);
      expect(state.availableNumbers).toHaveLength(88);
      expect(state.extractedNumbers).toEqual([12, 89]);
      jest.spyOn(global.Math, 'random').mockRestore();
    });
  });

  describe('actions', () => {
  });

  describe('modules', () => {
  });
});
