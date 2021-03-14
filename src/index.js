module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }

    matrix.map((item, index) => {
        if (index % 2 !== 0) {
            item.reverse()
        }
        return item;
    })

    return [].concat.apply([], matrix);
}
