export type old = { [key: string]: string[] }
type shiny = { [key: string]: number }

export default function transform(input: old): shiny {
    const keys = Object.keys(input)
    let shiny: shiny = {}

    keys.forEach(key => {
        const value = parseInt(key)
        input[value].map((el) => el.toLowerCase()).forEach(key => {
            shiny[key] = value
        })
    });
    return shiny
}