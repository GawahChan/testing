const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  
  describe('my cans', () => {
    test('have all the same properties', () => {
      expect(can1).toEqual(can2);
    });
    test('are not the exact same can', () => {
      expect(can1).not.toBe(can2);
    });
  });

  