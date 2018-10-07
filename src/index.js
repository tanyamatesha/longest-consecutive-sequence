module.exports = function longestConsecutiveLength(array) {
    let max = 0;
    let hash = [];

    if (array.length === 0 || array === null) return 0;

    array.sort( (a, b) => a - b );

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] === array[i] + 1) {
            max++;
        } else {
            hash.push(max + 1);
            max = 0;
        }
    }

    return Math.max.apply(null, hash);
};