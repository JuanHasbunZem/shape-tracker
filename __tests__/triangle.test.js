import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lenghts', () =>
  {
    const traingle = new Triangle(2,4,5);
    expect(traingle.side1).toEqual(2);
    expect(traingle.side2).toEqual(4);
    expect(traingle.side3).toEqual(5);
  });
});