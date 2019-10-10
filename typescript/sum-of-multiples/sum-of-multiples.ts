interface sum {
    to: (ceiling: number) => number
}

export default function SumOfMultiples(numbers: number[]): sum {
    return {
        to: (ceiling: number) => {
            let result = 0
            for (let i = 0; i < ceiling; i++) {
                let notCounted = true
                for (const num of numbers) {
                    if (i % num === 0 && notCounted) {
                        result += i
                        notCounted = false
                    }
                }
            }
            return result
        }
    }
}
