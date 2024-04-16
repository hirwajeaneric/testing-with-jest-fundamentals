const { sum, myFunction } = require('../src/sum');;

/**
 * Using the `toBe()` matcher.
 * `toBe` is used for primitive types like numbers, strings and booleans
 */
test('Adds 1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('Two plus 2 + 2 is four', () => {
    expect(2 + 2).toBe(4);
})

/**
 * Using the `toEqual()` matcher.
 * `toEqual` is used for non-primitive types such as arrays and objects
 */
test('Object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

/**
 * Using the `toBeFalsy()` matcher.
 * `toBeFalsy` is used to check whether a value is null, undefined, 0, false,...
 */
test('Boolean false', () => {
    expect(false).toBeFalsy();
});


/**
 * Using the `toBeTruthy()` matcher.
 * `toBeTruthy` is used to check whether a value is not null, undefined, 0, false,...
 */
test('One is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
})


/**
 * Using to `toThrow` matcher. 
 * It tests whether a particular function throws an error when executed in a certain condition
 */
test('Function throws error', () => {
    expect(() => {
        myFunction("Testing")
    }).toThrow();
});

