function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 1000);
    });
}

module.exports = fetchPromise;