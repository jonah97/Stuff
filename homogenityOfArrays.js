let arr1 = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 5, 3, 4, 8],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 23, 56],
    [1, 2, 31, 4],
    [1, 2, 33, 4],
    [1, 2, 3, 4],
]

let arr2 = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
]

let arr3 = [
    ['a', 'b', 'c', 'd', 'u'],
    ['a', 'f', 'c', 'o', 'u'],
    ['a', 'p', 'p', 'd', 'u'],
    ['a', 'b', 'c'],
    ['a', 'z', 'x', 'd', 'u']
]

function calcHomogenity(arr) {
    let n = arr.length
    let xFunc = () => {
        let counter = []
        let j
        let nx = 0
        for (let i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (!counter.includes(arr[i][j])) {
                    counter.push(arr[i][j])
                }
            }
            nx += j
        }
        return counter.length / nx
    }
    let x = xFunc()
    return (n - x * n) / ((n - 1) / 100)
}

console.log(`${calcHomogenity(arr3)}% homogenity`)