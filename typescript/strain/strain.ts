export function keep<T>(array: T[], callback: Function): T[] {
    return array.filter(el => callback(el))
}

export function discard<T>(array: T[], callback: Function): T[] {
    return array.filter(el => !callback(el))
}
