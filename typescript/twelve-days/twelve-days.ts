type strings = { [key: number]: string }

export default class TwelveDays {

    static verses: strings = {
        1: ' and a Partridge in a Pear Tree.\n',
        2: ' two Turtle Doves,',
        3: ' three French Hens,',
        4: ' four Calling Birds,',
        5: ' five Gold Rings,',
        6: ' six Geese-a-Laying,',
        7: ' seven Swans-a-Swimming,',
        8: ' eight Maids-a-Milking,',
        9: ' nine Ladies Dancing,',
        10: ' ten Lords-a-Leaping,',
        11: ' eleven Pipers Piping,',
        12: ' twelve Drummers Drumming,'
    }

    static ordinalNumbers: strings = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth',
        5: 'fifth',
        6: 'sixth',
        7: 'seventh',
        8: 'eighth',
        9: 'ninth',
        10: 'tenth',
        11: 'eleventh',
        12: 'twelfth'
    }

    static recite(start: number, end: number): string {
        let song = ''
        for (let i = start; i <= end; i++) {
            song += `On the ${TwelveDays.ordinalNumbers[i]} day of Christmas my true love gave to me:`
            for (let j = i; j >= 1; j--) {
                i === 1 ? song += ' a Partridge in a Pear Tree.\n' : song += TwelveDays.verses[j]
            }
        }
        return song
    }
}
