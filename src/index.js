// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (arguments.length !== 0) {
        for (let i = 0; i < matrix.length; i++) {
            let array = matrix[i];
            if (i % 2 === 0) {
                for (let j = 0; j < array.length; j++) {
                    result.push(array[j]);
                }
            } else {
                for (let k = array.length - 1; k > -1; k--) {
                    result.push(array[k]);
                }
            }
        }
    }
    return result;
};
