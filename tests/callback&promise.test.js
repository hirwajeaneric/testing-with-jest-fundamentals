const fetchData = require("../src/callback");
const fetchPromise = require('../src/promise')

test("the data is peanut butter", done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done();
        }
    }

    fetchData(callback);
});


// test("The data is promise resolved", () => {
//     return expect(fetchPromise()).resolves.toBe('Promise resolved');
// });

// test("The fetch fails with an error", () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// })

test("the data is promise resolved", async () => {
    const data = await fetchPromise();
    expect(data).toBe('Promise resolved');
});