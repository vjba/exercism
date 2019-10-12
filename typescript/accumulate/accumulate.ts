const accumulate = (arr: (string | number)[], callback: Function) => {
    arr.forEach((el, idx) => {
        arr[idx] = callback(el)
    })
    return arr
}

export default accumulate
