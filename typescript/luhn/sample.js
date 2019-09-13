let iterated = Array.from("055 444 285")
            .reverse()
            .filter((char) => parseInt(char) !== NaN ? char : false)
            .map(Number)
            .map((num, i) => i % 2 !== 0 ? num * 2 : num)
            .map((num) => num > 9 ? num - 9 : num)

let sum = iterated.reduce((sum, num) => sum + num)

const logit = () => {
    console.log(iterated, '\n', sum)
}
